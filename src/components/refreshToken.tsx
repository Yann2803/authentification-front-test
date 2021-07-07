
async function RefreshToken() {
    //@ts-ignore
    const refreshToken = JSON.parse(localStorage.getItem('refresh_token'))
    console.log('this is the refresh token', refreshToken)

            try {    
                const response = await fetch('http://127.0.0.1:5000/refresh', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${refreshToken}`
                    },
                })
                if (response.status !== 200) {
                    console.log('this is the response', response)
                    alert('there has been an error')
                    return false
                }

                const data = await response.json()
                console.log('this is the refreshed data', data)
                localStorage.setItem('token', JSON.stringify(data.access_token))
                return data
            }

            catch (error) {
                console.error('there has been an error login in')
            }

    return (
        <div>
            
        </div>
    )
}

export default RefreshToken
