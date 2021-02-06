import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <div>
            <nav>
                <h1>Some Site</h1>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li className="mr-3">Home</li>
                    </Link>
                    <Link style={navStyle} to="/about">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
