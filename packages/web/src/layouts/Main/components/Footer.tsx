import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

import { Theme } from '@material-ui/core';
import {Icon, MavricIcon} from '../../../assets';
const mavricLogo = require('../../../assets/mavric.png')

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  sqImg: {
    height: 20,
  },
  img: {
    height: 12
  }
}));

const Footer = (props: any) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://mavrictech.com/"
          target="_blank"
        >
          Squeezepage.io by <img alt="Mavric" className={classes.img} src={MavricIcon} />
        . 2020
        </Link>
      </Typography>
      <Typography variant="caption">
        Giving all people the power to create.  Build love, not hate. #BlackLivesMatter
      </Typography>
    </div>
  );
};

export default Footer;
