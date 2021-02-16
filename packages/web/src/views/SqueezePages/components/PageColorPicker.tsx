import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    background: (props: {color: string}) => {
        switch(props.color) {
            case 'black':
                return '#000';
            case 'white':
                return '#fff';
            case 'blue-aqua':
                return 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)';
            case 'red-ish':
                return 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)';
            case 'blue-yellow':
                return 'linear-gradient(45deg, rgba(34,193,195,1) 30%, rgba(253,187,45,1) 90%)';
        }
    },
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 20px',
    margin: 8,
  },
});

export default function ColorChip(props: any) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Chip className={classes.root} {...other} />;
}
