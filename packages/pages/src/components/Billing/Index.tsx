import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Checkout } from './Checkout';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      left: 450,
      top: 50,
      width: 400,
      height: 400,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
    },
    cardInput: {
      padding: 2,
      margin: 2
  }
  }),
);


export default function SimpleModal(Props:any) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const checkoutStyles =   {
    base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      },
     
};
  
  const handleCloseModal =()=>{
    Props.setOpen(false);
  
  }


  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">You need to pay</h2>
      <p id="simple-modal-description">
        if you want to download this file you need to pay 10$ for this file.Thanks
      </p>
      <Checkout styles={checkoutStyles} cardClass={classes.cardInput}  />
    </div>
  );

  return (   
    <div>  
      <Modal
        open={Props.open}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
