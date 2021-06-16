import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

const PublicPage = () => {
    

    return (
        <div>
            <h4>
                "this is the public page"
            </h4>
            <Link to='/private-page'>
            <Button type="submit" variant="contained">Go to private page</Button>
            </Link>
        </div>

    );
}

export default PublicPage