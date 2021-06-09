import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLogOut from './buttonLogOut'

const PrivatePage = () => {
    return (
        <div>
            <ButtonLogOut />
            <h4>
            HELLO THIS IS THE PRIVATE PAGE
            </h4>
            
            <Link to='/public-page'>
                <button >
                    Go to public page
                </button>
            </Link>
        </div>
    )
}

export default PrivatePage
