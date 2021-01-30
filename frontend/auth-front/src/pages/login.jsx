import React, {Component} from 'react';

class Login extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="mt-5 border shadow text-center col-md-4">
                    <div className="m-5">
                        <form>
                            <label>
                                <b>Username</b> <br />
                                <input type="text"/>
                            </label>
                            <br />
                            <label className="mt-3">
                                <b>Password</b> <br />
                                <input type="password"/>
                            </label>
                        </form>
                        <button className="btn btn-primary mt-3">Login</button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

export default Login;
