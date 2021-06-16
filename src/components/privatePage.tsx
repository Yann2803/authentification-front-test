import { Link } from 'react-router-dom'
import ButtonLogOut from './buttonLogOut'
import { useEffect } from 'react'

const PrivatePage = () => {
    const refreshToken = localStorage.getItem('refresh_token')


    useEffect(() => {
        (async () => {

            try {
                const response = await fetch('http://127.0.0.1:5000/refresh', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        //'credentials': 'include',
                        'Authorization': 'Bearer' + refreshToken
                    },
                } )
                console.log('this is the opts ', response.headers)
                if (response.status !== 200) {
                    alert('no no no no')
                    return false
                }

                const data = await response.json()
                console.log('this is the refresh data', data)
                localStorage.setItem('token', JSON.stringify(data.access_token))
                return data
            }

            catch (error) {
                console.error('there has been an error login in')
            }
        })()
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
