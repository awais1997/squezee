import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import { setAccessToken} from '../../helpers/accessToken';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

import { Theme } from '@material-ui/core';
import { refreshToken } from '../../helpers/ApiClient';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const apsoApiBase = process.env.REACT_APP_APSO_API_BASE;

interface Props {
  children: React.Component;
}
const Main = (props: Props) => {
  const { children } = props;

  const classes = useStyles();
  const theme: any = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [loading, setLoading] = React.useState(true);
  const [openSidebar, setOpenSidebar] = useState(false);

  React.useEffect(() => {
    refreshToken()
    .then(({ accessToken }) => {
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);
  
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };
  
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  
  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  
  if (loading) {
    return <div>loading...</div>;
  }
  
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
