import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, colors } from '@material-ui/core';
import {useGetCurrentPlanQuery} from '../../../generated/graphql';
import {PlanPickerButton} from './PlanPickerButton'
import { Theme } from '@material-ui/core';

const mavricLogo = require('../../../assets/mavric.png')

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center',
    '& > img': {
      height: '80%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  contentText: {
    color: theme.palette.secondary.contrastText,    
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

export const UpgradePlan = (props: any) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const {data, loading, error} = useGetCurrentPlanQuery();
  console.log(data)
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      <div className={classes.content}>
        <Typography
        className={classes.contentText}
          align="center"
          gutterBottom
          variant="h6"
        >
          Current Plan: {data?.getCurrentPlan.title}
        </Typography>
      </div>
      <div className={classes.actions}>
        <PlanPickerButton actionTitle="Upgrade and get more!" />
      </div>
    </div>
  );
};

