import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardHeader, Divider, CardContent, TextField, CardActions, Button, Chip, Avatar } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import PageColorPicker from './PageColorPicker'
import {PageSettings} from 'squeazee-types'
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4)
    },
}));

interface Props {
    onSave: (values: any) => Promise<void>
    values: PageSettings
    setValues: React.Dispatch<React.SetStateAction<PageSettings>>
}

const backgroundColors: {[key: string]: string | string[]} = {
     black: '#000',
    white: '#fff',
    'blue-aqua': ['#2196F3', '#21CBF3'],
    'red-ish': ['#FE6B8B', '#FF8E53'],
    'blue-yellow': ['rgba(34,193,195,1)', 'rgba(253,187,45,1)'] 
};

const PageForm = ({ onSave, values, setValues }: Props) => {
    const classes = useStyles();
    const [selectedFile,setSelectedFile] =useState<any>("")

    const handleChange = (event: any) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleColorChange = (color: string | string[]) => {
        setValues({
            ...values,
            background: color
        })
    }
    const handleSave = async () => {
        try {
            await onSave({ jsonBody: values })
        } catch (err) {
            console.log(err)
        }
    };
    const onChangehandle = (event:any) => {
        setSelectedFile(event.target.files[0])
        
    }
    const onUploadhandle=()=>{
        console.log("....",selectedFile);
        const data = new FormData() 
         data.append('file',selectedFile, selectedFile.name)
         console.log("data",data);
    }

    return (
        <Card
            className={classes.root}
        >
            <form
                autoComplete="off"
                noValidate
            >
                <CardHeader
                    subheader="Name and enter your offer information"
                    title="Squeeze Offer"
                />
                <Divider />
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                helperText="Please name your page"
                                label="name"
                                margin="dense"
                                name="name"
                                onChange={handleChange}
                                required
                                value={values.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Offer"
                                margin="dense"
                                name="headline"
                                onChange={handleChange}
                                required
                                value={values.headline}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="Pitch"
                                margin="dense"
                                name="bodyText"
                                onChange={handleChange}
                                required
                                value={values.bodyText}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <TextField
                                fullWidth
                                label="E-Mail Field Placeholder"
                                margin="dense"
                                name="emailPlaceholder"
                                onChange={handleChange}
                                value={values.emailPlaceholder}
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
                                label="Submit Button Text"
                                margin="dense"
                                name="submitButtonText"
                                onChange={handleChange}
                                required
                                value={values.submitButtonText}
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
                                label="Redirect URL"
                                margin="dense"
                                name="redirectUrl"
                                onChange={handleChange}
                                required
                                value={values.redirectUrl}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            {Object.keys(backgroundColors).map((color: any, key: number) => {
                                    const selectedColor = values.background == backgroundColors[color] 
                                    || JSON.stringify(values.background) ===JSON.stringify(backgroundColors[color])
                                    console.log(values.background, backgroundColors[color], selectedColor)
                                    return (
                                    <PageColorPicker
                                        key={key}
                                        color={color}
                                        onClick = {() => handleColorChange(backgroundColors[color])}
                                        avatar={selectedColor && <DoneIcon />}
                                    />
                                    )
                            })}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                <input type="file" name="file" onChange={onChangehandle}/>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={onUploadhandle}
                    >
                        upload
          </Button>
                </CardActions>

                </CardActions>
                <Divider />

                
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleSave}
                    >
                        Save
          </Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default PageForm;
