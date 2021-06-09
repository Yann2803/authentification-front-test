import React, { useEffect } from 'react';
import { Link } from "react-router-dom"

const PublicPage = () => {
    

    return (
        <div>
            <h4>
                "this is the public page"
            </h4>
            <Link to='/private-page'>
                <button >
                    Go to private page
                </button>
            </Link>
        </div>

    );
}

export default PublicPage