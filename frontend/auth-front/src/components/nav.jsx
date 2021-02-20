import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { logoutUser } from '../api/authRequests';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    const logout = () => {
        logoutUser().then(res => {
            window.location.reload(false);
        });
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-4">
                <Link style={navStyle} to="/">
                    <a className="navbar-brand">Some Site</a>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <Link style={navStyle} to="/">
                            <li className="mr-3">Home</li>
                        </Link>
                        <Link style={navStyle} to="/about">
                            <li>About</li>
                        </Link>
                    </ul>
                    <span class="navbar-text">
                        <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
