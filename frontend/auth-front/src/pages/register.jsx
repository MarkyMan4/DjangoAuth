import axios from 'axios';
import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        errorText: ''
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="mt-5 border shadow text-center col-md-4">
                    <div className="mt-5">
                        <form>
                            <label>
                                <b>Username</b> <br />
                                <input type="text" value={this.state.username} onChange={this.handleUsernameInput} />
                            </label>
                            <br />
                            <label className="mt-3">
                                <b>Email</b> <br />
                                <input type="text" value={this.state.email} onChange={this.handleEmailInput} />
                            </label>
                            <br />
                            <label className="mt-3">
                                <b>Password</b> <br />
                                <input type="password" value={this.state.password} onChange={this.handlePasswordInput} />
                            </label>
                        </form>
                        <p className="mt-2 text-danger">{this.state.errorText}</p>
                        <input className="btn btn-primary mt-3" onClick={this.handleSubmit} type="submit" value="Register" />
                    </div>
                    <Link to="/"><p className="mt-4">Already have an account? Sign in</p></Link>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }

    handleUsernameInput = (event) => {
        this.setState({username: event.target.value});
    }

    handleEmailInput = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordInput = (event) => {
        this.setState({password: event.target.value});
    }

    /*
     * Attempt to register the user.
     * A message is displayed if the username already exists or if the registration fails.
     * 
     * TODO:
     * Need to validate email and enforce strong passwords.
     * redirect to home page after register, currently still showing /register in url
     */
    handleSubmit = (event) => {
        let baseUrl = 'http://127.0.0.1:8000';
        let headers = {
            header: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(
            baseUrl + '/api/auth/register',
            {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            },
            headers
        ).then(res => {
            localStorage.setItem('token', res.data.token);
            window.location.reload(false);
        }).catch(err => {
            // if the response says the user already exists, display the message 
            // from the response on screen
            if(err.response) {
                if(err.response.data.username) {
                    this.setState({errorText: err.response.data.username[0]});
                }
                else if(err.response.data.email) {
                    this.setState({errorText: err.response.data.email[0]});
                }
                else {
                    this.setState({errorText: 'Error registering new user'});
                }
            }
            else {
                this.setState({errorText: 'Error registering new user'});
            }
        });
    }
}

export default Register;
