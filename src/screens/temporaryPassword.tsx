import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TemporaryForm from "../components/temporaryForm/temporaryForm"
import Footer from "../components/footer/footer"
import "./login.css"
import Logo from "../components/logo/Logo"


const TemporaryPassword = () => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                '&': {
                    width: "100%",
                    height: "100%"
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
            <Grid>
                <TemporaryForm/>
            </Grid>
            <Footer />
        </Grid>

    );
};

export default TemporaryPassword
