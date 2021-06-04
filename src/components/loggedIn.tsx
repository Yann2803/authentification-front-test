import React from 'react';


export interface loggedInProps{
    logout: () => void
}

const LoggedIn: React.FC<loggedInProps> = (props) => {

    return (
        <div>"you are logged in "
            <button onClick={props.logout}>logOut</button>
        </div>

    );
}

export default LoggedIn