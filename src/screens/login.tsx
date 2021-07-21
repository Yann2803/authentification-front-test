import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginForm from "../components/loginForm/loginForm"
import Footer from "../components/footer/footer"
import "./login.css"
import Logo from "../components/logo/Logo"


const Login = () => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '&': {
                    width: "100%",
                    height: "100%",
                    display: 'flex',
                    justifyContent: 'center',
                },
            },
        }),
    );
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={"blueBackground"}>
                <Logo className={'img'} />
            </Grid>
            <Grid className={'LoginForm'}>
                <LoginForm/>
            </Grid>
            <Footer />
        </Grid>

    );
};

export default Login
