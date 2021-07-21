import Grid from '@material-ui/core/Grid';
import './footer.css'



const Footer = () => {


    return (
        <Grid container>
            <Grid item xs={12} className={"footer"}>
                Stratocontrol version 0.1, Tous droits réservés 2020
            </Grid>
        </Grid>
    );
};

export default Footer
