import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom'


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

const Login = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
    };

    const setWithExpiry = (key: string, value: string, ttl: number) => {
        const now = new Date()

        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    }

    const getWithExpiry = (key: string) => {
        const token = localStorage.getItem(key)
        if (!token) {
            return null
        }
        const item = JSON.parse(token)
        const now = new Date()
        if (now.getTime() > item.expiry) {
            alert('You have been disconnected')
            localStorage.removeItem(key)
        }
    }

    useEffect(() => {
        getWithExpiry("token")
    }, [])

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
                setWithExpiry("token", data.access_token, 5)
            })

            .catch(error => {
                console.error('error', error)
            })
    };

    return (
        <div>
            <form onSubmit={handleConnect} className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField value={values.email}
                            onChange={handleChange} id="email" label="Username" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={values.password}
                            onChange={handleChange} id="password" label="Password" />
                    </Grid>
                    <Grid item xs={6}>
                        <Link to="/public-page">
                            <Button onClick={handleConnect} variant="contained">Login</Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
            <Link to='/public-page'>
                <button >
                    Go to public page
                </button>
            </Link>
            <Link to='/private-page'>
                <button >
                    Go to private page
                </button>
            </Link>
        </div>

    );
}
export default Login