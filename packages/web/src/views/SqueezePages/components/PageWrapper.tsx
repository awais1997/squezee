import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Theme } from '@material-ui/core';
import PageToolbar from './PageToolbar';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    },
    title: {
        fontSize: 14,
    },
    previewCard: {
        minHeight: 600,
    }
}));

const PageWrapper = (props: any) => {
    const { title, children, className, ...rest } = props;
    const classes = useStyles();

    return (
        <>
            <PageToolbar title={title} />
            <div className={classes.root}>
                {children}
            </div>
        </>
    );
};

export default PageWrapper;
