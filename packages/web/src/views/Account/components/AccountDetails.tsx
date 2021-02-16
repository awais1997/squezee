import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import { useUpdateMeMutation} from '../../../generated/graphql'

import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}));

interface Props {
  data: any
  className: any;
}
const AccountDetails = ({ data, className }: Props) => {
  const classes = useStyles();
  const [updateMe] = useUpdateMeMutation();

  const [values, setValues] = useState<any>(data);

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  React.useEffect(() => {
console.log(values)
  })

  const handleSave = () => {
    console.log(values)
    return updateMe({
        variables: {
            data: {
                ...values
            }
        },
    }).then((result: any) => { console.log(result) })
}

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the name"
                label="Name"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                value={values?.name  || ''}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values?.email  || ''}
                variant="outlined"
              />
            </Grid>
 
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSave}
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
