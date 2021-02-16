import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch
} from '@material-ui/core';
import {PlanPickerButton} from './PlanPickerButton'
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  listValue: {
    textAlign: 'right'
  }
}));

export const CurrentPlan = (props: any) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const currentPlan = {
    type: 'free',
    status: 'active',
    nextBill: new Date(),
    amount: 0,
  }
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(currentPlan.nextBill)
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(currentPlan.nextBill)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(currentPlan.nextBill)

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
          <List subheader={<ListSubheader>Current Plan</ListSubheader>} className={classes.root}>
          <ListItem>
            <ListItemText primary="Type" />
            <ListItemText className={classes.listValue}primary={currentPlan.type} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Status" />
            <ListItemText className={classes.listValue}primary={currentPlan.status} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Billing Amount" />
            <ListItemText className={classes.listValue}primary={`$${currentPlan.amount}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Next Billing Period" />
            <ListItemText className={classes.listValue} primary={`${da}-${mo}-${ye}`} />
          </ListItem>
        </List>
      </CardContent>
      <Divider />
      <CardActions>
        <PlanPickerButton actionTitle="Update Plan" />
      </CardActions>
    </Card>
  );
};

