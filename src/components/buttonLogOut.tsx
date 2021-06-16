import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const ButtonLogOut = () => {

    const logout = () => {
        localStorage.removeItem("token");
    }
    return (
        <div>
            <Link to='/login'>  
            <Button variant="contained" color="primary" onClick={logout}>
            Log Out
      </Button>
            </Link> 
        </div>
    )
}

export default ButtonLogOut
