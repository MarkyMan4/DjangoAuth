import React, { useEffect, useState } from 'react';
import { getUser, logoutUser } from '../api/authRequests';

function Home() {
    const [username, setUsername] = useState('');        

    useEffect(() => {
        getUser().then(res => {
            setUsername(res);
        })
    }, []);

    const logout = () => {
        logoutUser().then(res => {
            window.location.reload(false);
        });
    }

    console.log(getUser());

    /*
     * This is just a barebones home page with a logout button.
     * Logging out redirects to the home page.
     */
    return (
        <div>
            <h1>Welcome, {username}</h1>
            <button className="btn btn-success" onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;
