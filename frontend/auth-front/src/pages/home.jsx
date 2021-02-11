import React from 'react';
import { logoutUser } from '../api/authRequests';

function Home() {
    const logout = () => {
        logoutUser().then(res => {
            window.location.reload(false);
        });
    }

    /*
     * This is just a barebones home page with a logout button.
     * Logging out redirects to the home page.
     */
    return (
        <div>
            <h1>Home</h1>
            <button className="btn btn-success" onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;
