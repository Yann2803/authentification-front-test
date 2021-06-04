import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import LoggedIn from './loggedIn'


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


export default function Login() {
    const classes = useStyles();

    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const token = sessionStorage.getItem("token");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
    };

    const logout= () => {
        sessionStorage.removeItem("token");
    }
    const handleConnect = () => {
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
            })

        }
        fetch('http://127.0.0.1:5000/login', opts)
            .then(res => {
                if (res.status === 200) return res.json();
            })
            .then(data => {
                console.log(data)
                sessionStorage.setItem("token", data.access_token);
            })

            .catch(error => {
                console.error('error', error)
            })

        /*fetch('/api')
            .then(res => res.json())
            .then(data => console.log(data))*/

    };

    return (
        <form onSubmit={handleConnect} className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
                {(token && token !== "" && token !== undefined) ? (
                    <LoggedIn logout={logout}/>
                    
                 ) : (
                    <><Grid item xs={12}>
                        <TextField value={values.email}
                            onChange={handleChange} id="email" label="Username" />
                    </Grid>
                        <Grid item xs={12}>
                            <TextField value={values.password}
                                onChange={handleChange} id="password" label="Password" />
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handleConnect} variant="contained">SignIn</Button>
                        </Grid> </>)
                }

            </Grid>
        </form>
    );
}