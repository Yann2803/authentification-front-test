import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import userSchema from './userSchema';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);
const Login4 = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = (email: string, password: string) => {
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })

        }
        fetch('http://127.0.0.1:5000/login', opts)
            .then(res => {
                console.log('this is res', res)
                if (res.status === 200) return res.json();
            })
            .then(data => {
                localStorage.setItem('token', JSON.stringify(data.access_token))
                console.log('this is the data', data)
            })

            .catch(error => {
                console.error('error', error)
            })
    };
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={userSchema}
            onSubmit={(values) => {
                handleSubmit(values.email, values.password)
                history.push('/public-page');
                console.log(values)
            }}
        >
            <Form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Field name="email" as={TextField} type="email" placeholder='Email' />
                        <ErrorMessage name="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <Field name="password" as={TextField} type="password" placeholder='Password' />
                        <ErrorMessage name="password" />
                    </Grid>
                    <Button type="submit" variant="contained">Login</Button>
                </Grid>
            </Form>
        </Formik>
    );
};

export default Login4
