import React from 'react';
import PagesIcon from '@material-ui/icons/Pages';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  Theme,
  Link
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { PageSettings } from 'squeazee-types';
import moment from 'moment';

const squeezePageUrl = process.env.REACT_APP_PAGE_URL;

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

interface Props {
  id: string | number;
  slug: string;
  jsonBody: PageSettings;
  leadCount: number;
  updatedAt: string;
}
const PageCard = ({id, slug, jsonBody, leadCount, updatedAt}: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.imageContainer}>
          <PagesIcon />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {jsonBody.name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {jsonBody.headline}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              Updated {moment(updatedAt).fromNow()}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <RecentActorsIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {leadCount}
            </Typography>
          </Grid> 
          <Grid
            className={classes.statsItem}
            item
          >
            {/* <BorderColorIcon className={classes.statsIcon} /> */}
            <Typography
              display="inline"
              variant="body2"
            >
              <Link component={RouterLink} to={`/pages/${id}`}>
              Edit
              </Link>
              
            </Typography>
          </Grid>   
          <Grid
            className={classes.statsItem}
            item
          >
            {/* <BorderColorIcon className={classes.statsIcon} /> */}
            <Typography
              display="inline"
              variant="body2"
            >
              <Link href={`${squeezePageUrl}/${slug}`} target="_blank">
              Preview
              </Link>
              
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default PageCard;
