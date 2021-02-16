import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';
import { PageSettings } from 'squeazee-types';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
}));

type Props = {
    children?: ReactNode
    title?: string,
    jsonBody: PageSettings
}

const Layout = ({ children, title = '...', jsonBody }: Props) => {
    const classes = useStyles();

    const { background } = jsonBody;
    let backgroundStyle;

    if (typeof background === 'string') {
        backgroundStyle = `
      background: ${background};
      background-color: ${background};
      `
    } else {
        backgroundStyle = `
      background: -moz-linear-gradient(0deg, ${background[0]} 0%, ${background[1]} 100%);
      background: -webkit-linear-gradient(0deg, ${background[0]} 0%, ${background[1]} 100%);
      background: linear-gradient(0deg, ${background[0]} 0%, ${background[1]} 100%);
      `
    }

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
                {/* Reference: https://cssgradient.io/ */}
                <style>{`
                    html,
                    body,
                    body > div:first-child,
                    div#__next,
                    div#__next > div,
                    div#__next > div > div {
                        height: 100%;
                        overflow-y: hidden;
                    }
                    
                    body {
                        ${backgroundStyle}
                    }
                `}</style>
            </Helmet>

            {children}
            <footer className={classes.footer}>

            </footer>
        </div>
    )
}


export default Layout;
