#!/bin/bash

set -u

currentDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
rootDir=$(dirname "$(dirname "${currentDir}")")

getStackAction() {
    local stackName=$1
    local region=$2
    local command="create"

    aws cloudformation describe-stacks \
        --stack-name ${stackName} \
        --output text \
        --region ${region} &> /dev/null

    if [ $? -eq 0 ]; then
        command="update"
    fi

    echo "${command}"
}

checkError() {
    if [ $? -ne 0 ]; then
        echo "$1"
        exit 1
    fi
}

usage() {
    cat <<USAGE
Updates or creates a CloudFormation stack

Usage: $0 --env env --template file [--region region]

Options:

  --env env        Environment to create the stack in (staging|production)
  --template file  Name of template to update (relative to ops/cfn/templates/)
  --region region  The region to create/update the stack in (us-east-1)
  -h|--help        Show this message

Example:
  $0 --env staging --template studio-paste-cdn.yml

Returns:
  0 if everything worked, 1 if not
USAGE
}

main() {
    local cfnFile=
    local region=us-east-1
    local env=

    parseArgs() {
        while [[ $# > 0 ]]; do
            local key="$1"
            shift

            case "${key}" in
                -h|--help)
                    usage
                    exit 0
                    ;;
                --template)
                    cfnFile="${currentDir}/templates/$1"
                    shift
                    ;;
                --region)
                    region=$1
                    shift
                    ;;
                --env)
                    env=$1
                    shift
                    ;;
                *)
                    echo "unknown option: \"${key}\"; try --help"
                    exit 1
            esac
        done
    }

    parseArgs "$@"

    if [ -z "${env}" ]; then
        echo "Environment is required"
        exit 1
    fi
    if [ ! -f "${cfnFile}" ]; then
        echo "template \"${cfnFile}\" does not exist"
        exit 1
    fi
    if [[ "${cfnFile}" =~ .*/legacy/.* ]]; then
        echo "cannot update legacy templates with this script"
        exit 1
    fi

    local stackName=$(basename "${cfnFile%.*}")-${env}
    local tempCfnFile=$(mktemp -t ${stackName})
    checkError "failed to make temp file"

    perl -p -e "s/%env%/${env}/g" "${cfnFile}" > "${tempCfnFile}"
    checkError "Failed to replace values in ${tempCfnFile}"

    local action=$(getStackAction "${stackName}" "${region}")
    local command=
    local extraOpts=
    if [ "${action}" = "create" ]; then
        command="create-stack"
        extraOpts="--on-failure DO_NOTHING"
    else
        command="update-stack"
    fi

    local shouldContinue
    read -p "${action} stack ${stackName} in ${region}, continue? [y/n] " shouldContinue
    if [ "${shouldContinue}" != "y" ]; then
        echo "ok bye"
        exit
    fi

    aws --profile mavric cloudformation ${command} \
        --stack-name ${stackName} \
        ${extraOpts} \
        --tags \
            Key=Environment,Value=${env} \
        --parameters \
            ParameterKey=Environment,ParameterValue=${env} \
            ParameterKey=BucketName,ParameterValue=squeezepage.io \
        --template-body "file://${tempCfnFile}" \
        --region ${region} \
        --capabilities CAPABILITY_NAMED_IAM \
        > /dev/null

    checkError "Stack update failed"
    echo

    local -r tailStackEvents="${rootDir}/node_modules/.bin/tail-stack-events"
    if [ -x "${tailStackEvents}" ]; then
        "${tailStackEvents}" --region "${region}" --stack-name "${stackName}" --die
    fi

    echo
    echo "finished in ${SECONDS}s"
}

main "$@"
