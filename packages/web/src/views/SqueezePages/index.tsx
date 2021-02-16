import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import PagesToolbar from './components/PagesToolbar';
import PageCard from './components/PageCard';
import { useGetLandingPagesQuery } from '../../generated/graphql'
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const PageList = () => {
  const classes = useStyles();
  const {data, loading, error} = useGetLandingPagesQuery({ fetchPolicy: "network-only" });
  console.log(data, loading, error);

  return (
    <div className={classes.root}>
      <PagesToolbar />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {data && data.getLandingPages.map(page => (
            <Grid
              item
              key={page.slug}
              lg={4}
              md={6}
              xs={12}
            >
              <PageCard {...page} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default PageList;
