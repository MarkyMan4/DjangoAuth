import React from 'react';
import axios from 'axios';

function Home() {
    const logout = () => {
        // const history = useHistory();

        console.log('Token ' + localStorage.getItem('token'));
        let baseURL = 'http://127.0.0.1:8000'
        axios.post(
            baseURL + '/api/auth/logout',
            {},
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token')
                }
            }
        ).then(res => {
            localStorage.removeItem('token');
            window.location.reload(false);
        }).catch(err => {
            console.log(err);
        })
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
