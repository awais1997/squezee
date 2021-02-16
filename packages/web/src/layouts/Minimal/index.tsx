import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Topbar from './components/Topbar';

import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

const Minimal = (props: any) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Minimal;
