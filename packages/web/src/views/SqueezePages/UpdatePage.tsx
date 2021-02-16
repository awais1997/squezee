import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Theme } from '@material-ui/core';
import PageWrapper from './components/PageWrapper';
import PageBody from './components/PageBody';
import {
    useUpdateLandingPageMutation,
    useGetLandingPageQuery,
} from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    }
}));

const Page = (props: any) => {
    const { className, ...rest } = props;
    const classes = useStyles();
    const { params }: { params: { pageId?: string } } = useRouteMatch();
    const [updateLandingPage] = useUpdateLandingPageMutation();
    const { data, loading, error } = useGetLandingPageQuery({
        variables: {
            id: Number(params.pageId)
        },
        fetchPolicy: "network-only"
    });

    const handleSave = (values: any) => {
        return updateLandingPage({
            variables: {
                data: {
                    id: Number(params.pageId),
                    ...values
                }
            },
        }).then((result) => { console.log(result) })
    }

    const title = 'Update your Squeeze Page';

    if (loading) {
        return (
            <PageWrapper title={title}>
                <div className={classes.root}>
                    Loading...
                </div>
            </PageWrapper>
        )
    }
    return (
        <PageWrapper title={title}>
            <PageBody onSave={handleSave} data={data?.getLandingPage.jsonBody}/>
        </PageWrapper>
    );
};

export default Page;
