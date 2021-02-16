import React from 'react';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import { Theme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        height: theme.spacing(5),
        width: theme.spacing(5)
    }
}));

const BackButton = () => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <IconButton
            color="primary"
            aria-label="Go Back"
            onClick={() => history.goBack()}
        >
            <ChevronLeftIcon className={classes.icon} />
        </IconButton>
    );
};

export default BackButton;
