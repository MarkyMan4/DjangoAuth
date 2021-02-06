import axios from 'axios';
import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const history = useHistory();

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }

    /*
     * Attempt to register the user.
     * A message is displayed if the username already exists or if the registration fails.
     * 
     * TODO:
     * Need to validate email and enforce strong passwords.
     * redirect to home page after register, currently still showing /register in url
     */
    const handleSubmit = (event) => {
        let baseUrl = 'http://127.0.0.1:8000';
        let headers = {
            header: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(
            baseUrl + '/api/auth/register',
            {
                username: username,
                email: email,
                password: password
            },
            headers
        ).then(res => {
            localStorage.setItem('token', res.data.token);
            history.push('/');
            window.location.reload(false);
        }).catch(err => {
            // if the response says the user already exists, display the message 
            // from the response on screen
            if(err.response) {
                if(err.response.data.username) {
                    setErrorText(err.response.data.username[0]);
                }
                else if(err.response.data.email) {
                    setErrorText(err.response.data.email[0]);
                }
                else {
                    setErrorText('Error registering new user');
                }
            }
            else {
                setErrorText('Error registering new user');
            }
        });
    }

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="mt-5 border shadow text-center col-md-4">
                <div className="mt-5">
                    <form>
                        <label>
                            <b>Username</b> <br />
                            <input type="text" value={username} onChange={handleUsernameInput} />
                        </label>
                        <br />
                        <label className="mt-3">
                            <b>Email</b> <br />
                            <input type="text" value={email} onChange={handleEmailInput} />
                        </label>
                        <br />
                        <label className="mt-3">
                            <b>Password</b> <br />
                            <input type="password" value={password} onChange={handlePasswordInput} />
                        </label>
                    </form>
                    <p className="mt-2 text-danger">{errorText}</p>
                    <input className="btn btn-primary mt-3" onClick={handleSubmit} type="submit" value="Register" />
                </div>
                <Link to="/"><p className="mt-4">Already have an account? Sign in</p></Link>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}

export default Register;
