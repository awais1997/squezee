import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import SearchInput from './SearchInput';

import { Theme } from '@material-ui/core';
import BackButton from '../../../components/BackButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const PageToolbar = (props: any) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <BackButton />
        <Typography variant="h2" component="h2">{props.title}</Typography> 
      </div>
    </div>
  );
};

export default PageToolbar;
