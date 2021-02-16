import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import { Theme } from '@material-ui/core';

import {Logo} from '../../../components/Logos'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none'
  },
  logoImage: {
    height: 5
  }
}));

const Topbar = (props: any) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="transparent"
      position="fixed"
    >
      <Toolbar>
        {/* <RouterLink to="/">
          <Logo
          />
        </RouterLink> */}
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
