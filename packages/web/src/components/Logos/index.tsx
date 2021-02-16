import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { Logo1, Logo2, Logo3} from '../../assets'

const useStyles = makeStyles((theme: Theme) => ({
    horizontal: {
        height: 50
    },
    vertical: {
        height: 300
    }
}));

export const Logo = () => {
    const classes = useStyles();
    return <img
        alt="Logo"
        className={classes.horizontal}
        src={Logo1}
    />
}

export const LogoVertical = () => {
    const classes = useStyles();
    return <img
        alt="Logo"
        className={classes.vertical}
        src={Logo2}
    />
}

export const WordLogo = () => {
    const classes = useStyles();
    return <img
        alt="Logo"
        className={classes.horizontal}
        src={Logo3}
    />
}