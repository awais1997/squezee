import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

import { Theme } from '@material-ui/core';
import PagePreview from './PagePreview';
import { PageSettings } from '../Model';
import PageForm from './PageForm';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    },
    title: {
        fontSize: 14,
    },
    previewCard: {
        minHeight: 600,
    }
}));

const PageBody = (props: any) => {
    const { onSave, data } = props;
    const classes = useStyles();

    const [values, setValues] = React.useState<PageSettings>(data || {
        name: 'New Squeeze Page!',
        headline: 'Check out my cool new product!',
        bodyText: 'This amazing product will solve all of your problems.',
        emailPlaceholder: 'Yes, I want to receive this great stuff!',
        submitButtonText: 'Contact Me',
        redirectUrl: 'http://example.com',
        background: 'http://some-image.com/image1.jpg'
    });

    const bgColor = (background: string | string[]) => {
        if (typeof background === 'string') {
            return { backgroundColor: background }
        } else {
            return { background: `linear-gradient(0deg, ${background[0]} 0%, ${background[1]} 100%)` }
        }
    };

    return (
        <Grid
            container
            spacing={4}
        >
            <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
            >
                <PageForm onSave={onSave} values={values} setValues={setValues} />
            </Grid>
            <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
            >
                <Card className={classes.previewCard} style={bgColor(values.background)}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Preview
                                </Typography>
                        <PagePreview {...values} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default PageBody;
