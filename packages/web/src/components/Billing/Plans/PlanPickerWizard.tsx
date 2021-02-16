import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import {PricingPlans} from './PricingPlans'
import {Checkout} from '../Checkout';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        heroContent: {
            padding: theme.spacing(8, 0, 6),
        },
        cardHeader: {
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
        },
        cardPricing: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            marginBottom: theme.spacing(2),
        },
        cardInput: {
            padding: theme.spacing(2),
            margin: theme.spacing(2, 0 ,2),
        }
    }),
);

export function PlanPickerWizard() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [plan, setPlan] = React.useState('')
    const steps = ['Pick', 'Pay'];

    const handleNext = (planTier: any) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setPlan(planTier);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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
          }
    };

    return (
        <div className={classes.root}>
            <div>
                {activeStep === steps.length - 1? (
                    <Container maxWidth="sm" component="main" className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Great Choice!
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" component="p">
                            Quickly build an effective pricing table for your potential customers with this layout.
                            It&apos;s built with default Material-UI components with little customization.
                        </Typography>
                        <Checkout styles={checkoutStyles} cardClass={classes.cardInput} plan={plan} />
                        <Button onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                    </Container>
                ) : (
                        <PricingPlans onPlanSelect={handleNext} />
                    )}
            </div>
        </div>
    );
}
