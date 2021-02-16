import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Button,
    Theme,
} from '@material-ui/core';
// import FacebookLogin from 'react-facebook-login-with-hooks';
import {useFacebookLogin, FaceBookLoginProps, SuccessResponse} from './UseFacebookLogin'
import { Facebook as FacebookIcon } from './icons';
import { loginWithFacebook } from '../../helpers/ApiClient';
import { setAccessToken } from '../../helpers/accessToken';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    socialIcon: {
        marginRight: theme.spacing(1)
    },
}));

const FacebookLoginButton = ({ setFormState }: any) => {
    const classes: any = useStyles();
    const history = useHistory()
    const facebookProps: FaceBookLoginProps = {
        appId: process.env.REACT_APP_FACEBOOK_APPID || '',
        language: "EN",
        version: "8.0",
        fields: ["id", "email", "name"],
        onFailure: (err: any) => {
            setFormState((formState: any) => ({
                ...formState,
                isValid: err ? false : true,
                touched: {
                    ...formState.touched,
                    submit: true
                },
                errors: { submit: err.message } || {}
            }));
        },
        onSuccess: (response: SuccessResponse) => {
            console.log('HERE', response)
            const { accessToken, currentUser: { id, email } } = response;
            loginWithFacebook(accessToken)
                .then(({ user, accessToken: token }) => {
                    setAccessToken(token);
                    history.push('/');
                })
                .catch((err) => {
                    setFormState((formState: any) => ({
                        ...formState,
                        isValid: err ? false : true,
                        touched: {
                            ...formState.touched,
                            submit: true
                        },
                        errors: { submit: err.message } || {}
                    }));
                })
        }
      };
    const [{ loaded, currentUser, isLoggedIn }, login, logout] = useFacebookLogin(facebookProps);
    // const responseFacebook = () => { }
    console.log('STATE', loaded, currentUser, isLoggedIn)
    return (
        <Button
            color="primary"
            onClick={login}
            size="large"
            variant="contained"
        >
            <FacebookIcon className={classes.socialIcon} />
                         Login with Facebook
        </Button>

        // <FacebookLogin
        //     appId="1088597931155576"
        //     autoLoad
        //     callback={responseFacebook}
        //     render={(renderProps: any) => (
                // <Button
                //     color="primary"
                //     onClick={renderProps.onClick}
                //     size="large"
                //     variant="contained"
                // >
                //     <FacebookIcon className={classes.socialIcon} />
                //                      Login with Facebook
                // </Button>
        //     )}
        // />

    );
};

export default FacebookLoginButton;
