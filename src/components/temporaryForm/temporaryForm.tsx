import { Formik, Field, Form, ErrorMessage } from 'formik';
import temporarySchema from './temporarySchema';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react'
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


const TemporaryForm = () => {
    
    const history = useHistory();
    const [isUpdate, setIsUpdate] = useState(false)

    const PasswordUpdated = () => {
        setIsUpdate(isUpdate => !isUpdate)
        console.log('this is the state', isUpdate)
        return isUpdate
    }

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

    const sizeScreen = useWidth()
    const percentScreen = [1.7, 1.5, 1]
    const percentButton = [2, 1.5, 1.5]
    const classes = useStyles();

    const handleSubmit = async (temporaryPassword: string, newPassword: string) => {

        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                temporaryPassword: temporaryPassword,
                newPassword: newPassword,
                isUpdate: isUpdate,
            })
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/temporary', opts)
            if (response.status !== 200) {
                alert('there has been an error')
                return false
            }

            const data = await response.json()
            history.replace('/public-page')
            console.log('this is the fetch data', data)
            return data
        }

        catch (error) {
            console.error('there has been an error saving your password')
        }

    }

    return (
        <Grid>
            <Formik
                initialValues={{ temporaryPassword: '', newPassword: '' }}
                validationSchema={temporarySchema}
                onSubmit={(values) => {
                    handleSubmit(values.temporaryPassword, values.newPassword)
                    console.log('these are the onsubmit values ', values)
                }}
            >
                <Grid item xs={12}>
                    <Form className={'form'} noValidate autoComplete="on">
                        <Grid container >
                            <Grid item xs={12} className={'LoginForm'} >
                                <Field className={'input'} style={{ width: handleSizeWithPercent(25, sizeScreen, percentScreen) }} name="temporaryPassword" type="password" placeholder='Ancien mot de passe' />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <ErrorMessage name="temporaryPassword" />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <Field className={'input'} style={{ width: handleSizeWithPercent(25, sizeScreen, percentScreen) }} name="newPassword" type="password" placeholder='Nouveau mot de passe' />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <ErrorMessage name="newPassword" />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <Field className={'input'} style={{ width: handleSizeWithPercent(25, sizeScreen, percentScreen) }} name="confirmation" type="password" placeholder='Confirmation mot de passe' />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <ErrorMessage name="confirmation" />
                            </Grid>
                            <Grid item xs={12} className={'LoginForm'}>
                                <ColorButton onClick={PasswordUpdated} type="submit" variant="contained" color="primary" className={classes.button}>
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

export default TemporaryForm
