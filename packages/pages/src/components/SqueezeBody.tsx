import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { PageSettings } from 'squeazee-types';
import {
  useCreateLeadMutation
} from '../generated/graphql';
import SimpleModal from './Billing/Index';

const useStyles = makeStyles((theme: any) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface Props {
  slug: string;
  jsonBody: PageSettings;
}

function emailIsValid (email: string | undefined) {
  if (!email) {
    return false;
  }
  
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function SqueezeBody({
  slug,
  jsonBody: {
    headline,
    bodyText,
    emailPlaceholder,
    submitButtonText,
    redirectUrl,
  }
}: Props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const [createLead] = useCreateLeadMutation();
  const [open, setOpen] = React.useState(false);


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!emailIsValid(email)) {
      setError('Please enter a valid email address.')
      return;
    }
    return createLead({
      variables: {
        data: {
          email,
          slug
        }
      }
    }).then(() => {
      if (typeof window !== 'undefined') {
        window.location.href = redirectUrl;
      }
    })
  }

  const handleChange = (event: any) =>
    setEmail(event.target.value);

    const handleOpenModal = () => {
      setOpen(true);
    };
  
  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   // try {
  //   //   await addLead(slug, email)
  //   //   if (typeof window !== 'undefined') {
  //   //     window.location.href = redirectUrl;
  //   //   }
  //   // } catch (err) {
  //   //   console.log(err)
  //   // }
  // };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper} elevation={1}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          {headline}
        </Typography>
        <Typography component="h2" variant="h5">
          {bodyText}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                error={!!error}
                required
                fullWidth
                id="email"
                label={emailPlaceholder}
                name="email"
                autoComplete="email"
                onChange={handleChange}
                helperText={error}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {submitButtonText}
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleOpenModal}
          >
            Download file
          </Button>
          <SimpleModal open={open} setOpen={setOpen} />
        </form>
      </Paper>
    </Container>
  );
}