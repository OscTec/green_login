import React, { Component } from "react";
import logo from "../logo.svg";

class Login extends Component {
    state = {}
    render() {
        return (
            <div className="loginForm">
                <img src={logo} id="logo" alt="logo" />
                <h1 id="loginTitle">Example Login Screen</h1>
                <p id="loginSubTitle">Getting starter with green</p>
                <form>
                    <div className="form-group">
                        <label className='label' htmlFor="email">Email Addess</label>
                        <input id="email" type="text" className="form-control" />
                    </div>
                    <div>
                        <div className="checkbox mb-3">
                            <input id="remeberDevice" type="checkbox" />
                            <label className='label' htmlFor="remeberDevice">Remember this device</label>
                        </div>
                        <div>
                            <button className="btn btn-outline-light text-dark" type="submit">Sign in</button>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default Login;