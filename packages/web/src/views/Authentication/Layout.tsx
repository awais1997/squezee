import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  IconButton,
  Theme,
  Typography,
  Paper,
  GridList,
  GridListTile
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Icon } from '@iconify/react';
import apolloStackIcon from '@iconify/icons-logos/apollostack';
import reactIcon from '@iconify/icons-logos/react';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import expressIcon from '@iconify/icons-logos/express';
import graphqlIcon from '@iconify/icons-logos/graphql';
import materialIcon from '@iconify/icons-logos/material-ui';
import { LogoVertical } from '../../components/Logos';

const mavricLogo = require('../../assets/mavric.png')

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  container: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  containerContent: {
    backgroundColor: theme.palette.neutral.main,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerContentBody: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  contentText: {
    color: theme.palette.neutral.contrastText,
    fontWeight: 300
  },
  contentSubText: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  contentContainer: {
    backgroundColor: theme.palette.secondary.main
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  img: {
    height: 12
  }
}));

const SignIn = (props: any) => {
  const { history, children } = props;

  const classes: any = useStyles();

  const handleBack = () => {
    history.goBack();
  };

  const tiles = [
    { name: 'Typescript', icon: typescriptIcon},
    { name: 'React', icon: reactIcon},
    { name: 'Express', icon: expressIcon},
    { name: 'GraphQL', icon: graphqlIcon},
    { name: 'Apollo', icon: apolloStackIcon},
    { name: 'Material UI', icon: materialIcon},
  ]
  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.container}
          item
          lg={5}
        >
          <div className={classes.containerContent}>
            <div className={classes.containerContentBody}>
              <LogoVertical />
              <Typography
                className={classes.contentText}
                variant="h1"
              >
                 {/* combines battle tested libraries to make building your next application easier. */}
              </Typography>
              {/* <GridList cellHeight={160} className={classes.gridList} cols={3}>
              {tiles.map((tile, index) => (
                <GridListTile key={index} cols={1}>
                  <Icon icon={tile.icon} width="150" height="150" />
                </GridListTile>
              ))}
            </GridList> */}
              {/* <Typography
                className={classes.contentSubText}
                variant="body1"
              >
                Made with <span role="img" aria-label="heart">❤️</span> by <img alt="Mavric" className={classes.img} src={mavricLogo} />
              </Typography> */}

            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <Paper elevation={3} variant="elevation" className={classes.contentContainer}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton onClick={handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              {children}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(SignIn);
