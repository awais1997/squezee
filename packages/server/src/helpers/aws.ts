import * as AWS from 'aws-sdk';
import { Container } from 'sahara';
// import AwsAccessFactory from './AwsAccessFactory'

export default (container: Container): void => {
    const defaultOpts = {
        region: 'us-west-2'
    }
    AWS.config.apiVersions = {
        organizations: '2016-11-28',
        // other service API versions
      };
      
    container
        .registerInstance(new AWS.SES(defaultOpts), 'AwsSes')
        .registerInstance(new AWS.Organizations({
            region: 'us-east-1',
            secretAccessKey: 'BknhhbpckSxifUxiipYfQv43b9OxPJV5F+SW5kdt',
            accessKeyId: 'AKIARQ76PY2ULYMKDFR4'
        }), 'AwsOrg')
        .registerInstance(new AWS.IAM(defaultOpts), 'AwsIam')
        .registerInstance(new AWS.STS(defaultOpts), 'AwsSts')
        // .registerType(AwsAccessFactory)
}

/**
 * aws cli assume-role --role-arn arn:aws:iam::632704163954:role/OrganizationAccountAccessRole --role-session-name test
 */