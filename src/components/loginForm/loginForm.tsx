import { Formik, Field, Form, ErrorMessage } from 'formik';
import loginSchema from './loginSchema';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom'
import Footer from "../footer/footer"
import { handleSizeWithPercent, useWidth } from '../../styles'

const ColorButton = withStyles((theme: Theme) => ({
    root: {
        color: "white",
        textTransform: 'uppercase',
        backgroundColor: "#52B3C6",
        '&:hover': {
            backgroundColor: "#52B3C6",
        },
    },
}))(Button);

const LoginForm = () => {

    const history = useHistory();
    const sizeScreen = useWidth()
    const percentScreen = [1.7, 1.5, 1]
    const percentButton = [2, 1.5, 1.5]

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '&': {
                    width: "100%",
                    height: "100%"
                },
            },
            button: {
                margin: theme.spacing(1),
                width: handleSizeWithPercent(12, sizeScreen, percentButton), //Button Width
                height: '60%',
            }
        }),
    );
    const classes = useStyles();

    const handleSubmit = async (email: string, password: string) => {
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

        try {
            const response = await fetch('http://127.0.0.1:5000/login', opts)
            if (response.status !== 200) {
                alert('there has been an error')
                return false
            }

            const data = await response.json()
            console.log('this is the good data', data)
            localStorage.setItem('token', JSON.stringify(data.access_token))
            localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token))
            data.status ? history.replace('/public-page') : history.replace('/temporary');
            console.log('this is the fetch data', data)
            return data
        }

        catch (error) {
            console.error('there has been an error login in')
        }
    };
    return (
        <Grid>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                    handleSubmit(values.email, values.password)
                    console.log(values)
                }}
            >
                <Grid item xs={12}>
                    <Form className={'form'} noValidate autoComplete="on">
                        <Grid container >
                            <Grid item xs={12} className={'LoginForm'} >
                                <Field className={'input'} style={{ width: handleSizeWithPercent(25, sizeScreen, percentScreen) }} name="email" type="email" placeholder='Identifiant/ Adresse electronique' />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <ErrorMessage name="email" />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <Field className={'input'} style={{ width: handleSizeWithPercent(25, sizeScreen, percentScreen) }} name="password" type="password" placeholder='Mot de passe' />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <ErrorMessage name="password" />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <ColorButton type="submit" variant="contained" color="primary" className={classes.button}>
                                    Entrer
                                </ColorButton>
                            </Grid>
                        </Grid>

                    </Form>

                </Grid>

            </Formik>
            <Footer /> 
        </Grid>
    )
}

export default LoginForm
