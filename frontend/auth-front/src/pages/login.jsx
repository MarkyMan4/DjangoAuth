import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        invalidLoginText: ''
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
                                <b>Password</b> <br />
                                <input type="password" value={this.state.password} onChange={this.handlePasswordInput} />
                            </label>
                        </form>
                        <p className="mt-2 text-danger">{this.state.invalidLoginText}</p>
                        <input className="btn btn-primary mt-3" onClick={this.handleSubmit} type="submit" value="Login" />
                    </div>
                    <Link to="/register"><p className="mt-4">Don't have an account? Sign up</p></Link>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }

    handleUsernameInput = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordInput = (event) => {
        this.setState({password: event.target.value});
    }

    /*
     * Uses the username and password to try to authenticate the user
     * Update this so it doesn't have to refresh the window after loggin in.
     */
    handleSubmit = (event) => {
        let baseUrl = 'http://127.0.0.1:8000';

        axios.post(
            baseUrl + '/api/auth/login',
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then(res => {
            localStorage.setItem('token', res.data.token);
            window.location.reload(false);
        }).catch(res => {
            this.setState({invalidLoginText: 'Invalid username or password!'});
        });
    }
}

export default Login;
