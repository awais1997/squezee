import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Button,
    TextField,
    Link,
    Theme,
    FormHelperText,
    Typography
} from '@material-ui/core';
import FacebookLogin from './FacebookLogin';

import { Facebook as FacebookIcon, Google as GoogleIcon } from './icons';
import { login } from '../../helpers/ApiClient';
import { setAccessToken } from '../../helpers/accessToken'
import { GoogleLogin } from 'react-google-login';
const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 64
        }
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 128
        }
    }
};

const useStyles = makeStyles((theme: Theme) => ({
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        },
    },
    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },
    title: {
        marginTop: theme.spacing(3),
        color: theme.palette.secondary.contrastText
    },
    primaryButton: {
        color: theme.palette.secondary.contrastText
    },
    socialButtons: {
        marginTop: theme.spacing(3)
    },
    socialIcon: {
        marginRight: theme.spacing(1)
    },
    subtitle: {
        marginTop: theme.spacing(2),
        color: theme.palette.secondary.contrastText
    },
    textField: {
        marginTop: theme.spacing(2)
    },
    signInButton: {
        margin: theme.spacing(2, 0)
    }
}));

const SignInForm = () => {
    const history = useHistory()

    const classes: any = useStyles();

    const [formState, setFormState] = useState({
        isValid: false,
        values: {} as any,
        touched: {} as any,
        errors: {} as any
    });

    useEffect(() => {
        const errors = validate(formState.values, schema);

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {}
        }));
    }, [formState.values]);

    const handleChange = (event: any) => {
        event.persist();

        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }));
    };

    const handleSignIn = (event: any) => {
        event.preventDefault();
        const { email, password } = formState.values;
        login(email, password)
            .then(({ user, accessToken }) => {
                setAccessToken(accessToken);
                history.push('/');
            })
            .catch((err) => {
                setFormState(formState => ({
                    ...formState,
                    isValid: err ? false : true,
                    touched: {
                        ...formState.touched,
                        submit: true
                    },
                    errors: { submit: err.message } || {}
                }));
            })
    };

    const hasError = (field: string) =>
        formState.touched[field] && formState.errors[field] ? true : false;

        const responseGoogle = (resp: any) => console.log('GOOGLE RESP', resp)
    return (
        <div className={classes.contentBody}>
            <form
                className={classes.form}
                autoComplete="off"
                onSubmit={handleSignIn}
            >
                <Typography
                    className={classes.title}
                    variant="h2"
                >
                    Sign in
                </Typography>
                <Typography
                    color="textPrimary"
                    className={classes.subtitle}
                    gutterBottom
                >
                    Sign in with social media
                </Typography>
                <Grid
                    className={classes.socialButtons}
                    container
                    spacing={2}
                >
                    <Grid item>
                        <FacebookLogin setFormState={setFormState} />
                    </Grid>
                    <Grid item>
                        <GoogleLogin
                            clientId="106384661241-39jenf6qndusdgp0lpd1bkdar5t40qjp.apps.googleusercontent.com"
                            render={renderProps => (<Button
                                onClick={renderProps.onClick}
                                size="large"
                                variant="contained"
                            >
                                <GoogleIcon className={classes.socialIcon} />
        Login with Google
                            </Button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onRequest={() => responseGoogle('REQUESTED')}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            responseType="id_token"
                        />

                    </Grid>
                </Grid>
                <Typography
                    className={classes.subtitle}
                    color="textSecondary"
                    variant="body1"
                >
                    or login with email address
                 </Typography>
                <TextField
                    className={classes.textField}
                    error={hasError('email')}
                    fullWidth
                    helperText={
                        hasError('email') ? formState.errors.email[0] : null
                    }
                    placeholder="Email address"

                    name="email"
                    onChange={handleChange}
                    type="text"
                    value={formState.values.email || ''}
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    error={hasError('password')}
                    fullWidth
                    helperText={
                        hasError('password') ? formState.errors.password[0] : null
                    }
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={formState.values.password || ''}
                    variant="outlined"
                />
                {hasError('submit') && (
                    <FormHelperText error>
                        {formState.errors.submit}
                    </FormHelperText>
                )}
                <Button
                    className={classes.signInButton}
                    color="primary"
                    disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Sign in now
                 </Button>
                <Typography
                    className={classes.subtitle}
                    variant="body1"
                >
                    Don't have an account?{' '}
                    <Link
                        component={RouterLink}
                        to="/sign-up"
                        variant="h6"
                    >
                        Sign up
                     </Link>
                </Typography>
            </form>
        </div>
    );
};

export default SignInForm;
