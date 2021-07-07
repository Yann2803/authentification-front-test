import { Link } from 'react-router-dom'
import ButtonLogOut from './buttonLogOut'
import { useEffect } from 'react'
import RefreshToken from './refreshToken'

const PrivatePage = () => {

    useEffect(() => {
        RefreshToken()
    }, [])

    return (
        <div>
            <ButtonLogOut />
            <h4>
                HELLO THIS IS THE PRIVATE PAGE
            </h4>
            <div>{ }</div>

            <Link to='/public-page'>
                <button >
                    Go to public page
                </button>
            </Link>
        </div>
    )
}

export default PrivatePage
