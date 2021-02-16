import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

// import Notifications from './components/Notifications';
import Password from './components/Password';
import { CurrentPlan } from '../../components/Billing';

import { Theme } from '@material-ui/core';
import { useMeQuery } from '../../generated/graphql';
import AccountDetails from './components/AccountDetails';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Settings = () => {
  const classes = useStyles();
  const { data, loading, error } = useMeQuery({
    fetchPolicy: "network-only"
  });

  if (loading) {
    return (<div className={classes.root}>
      loading...
    </div>)
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={5}
          xs={12}
        >
          <AccountDetails data={{
            name: data && data.me && data.me?.name,
            email: data && data.me && data.me.email
            }} />
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
        >
          <Password />
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
        >
          <CurrentPlan />
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
