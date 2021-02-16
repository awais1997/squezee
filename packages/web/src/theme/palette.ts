import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    // dark: '#50514F',
    main: '#272352',
    light: '#3C91E6',
    // dark: colors.indigo[900],
    // main: colors.indigo[500],
    // light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    main: '#169A73'
    
    // dark: colors.blue[900],
    // main: colors.blue['A400'],
    // light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: '#FA824C',
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  neutral: {
    contrastText: '#272352',
    main: '#FAFFFD'
  },
  background: {
    default: '#FAFFFD',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
