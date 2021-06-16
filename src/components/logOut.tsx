import { Link, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const LogOut = () => {
    const history = useHistory();

    const handleLogOut = () => {
        const opts = {
            method: 'POST',
        }
        async function FetchLogOut() {
            const response = await fetch('http://127.0.0.1:5000/logout', opts)
            const data = await response.json()
            localStorage.removeItem("token");
            console.log('this is the logout data', data)
            return data
        };
    };

    return (
        <>
            <Button onClick={() => {
                handleLogOut()
                history.push('/login')
            }}>Log Out

            </Button>
        </>
    )

}

export default LogOut
