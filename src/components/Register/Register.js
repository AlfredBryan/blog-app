import React, { Component } from 'react';
import superagent from 'superagent';
import { Redirect } from 'react-router-dom';
import './Register.css';


class Register extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            errorMessage: '',
            registered: false
        }
    }

    emailhandleChange = (e) => {
        this.setState({ email: e.target.value.toLowerCase() })
    }
    usernamehandleChange = (e) => {
        this.setState({ username: e.target.value.toLowerCase() })
    }

    passwordhandleChange = (e) => {
        this.setState({ password: e.target.value })
    }

    register = (e) => {
        e.preventDefault();
        superagent
            .post('https://bionic-social.herokuapp.com/api/users/register')
            .send({ username: this.state.username, email: this.state.email, password: this.state.password })
            .end((error, response) => {
                if (response.ok) {
                    this.setState({ registered: true })
                    localStorage.setItem('token', response.body.token)
                } else {
                    this.setState({ errorMessage: "Authentication Failed" })
                }
            });
    }


    render() {
        if (this.state.registered) {
            return (<Redirect to={'/login'} />)
        }

        return (
            <div>
                <div className="center1">
                    <div className="card1">
                        <h1>Register</h1>
                        <form onSubmit={this.register}>
                            <input
                                className="form-item1"
                                placeholder="  Enter Username..."
                                type="text"
                                onChange={this.usernamehandleChange}
                                value={this.state.username}
                            />
                            <input
                                className="form-item1"
                                placeholder="  Enter Email..."
                                type="text"
                                onChange={this.emailhandleChange}
                                value={this.state.email}
                            />
                            <input
                                className="form-item1"
                                placeholder="  Enter Password..."
                                type="password"
                                value={this.state.password}
                                onChange={this.passwordhandleChange}
                            />
                            <input
                                className="form-submit1"
                                value="SUBMIT"
                                type="submit"
                            />
                        </form>
                        <p>{this.state.errorMessage}</p>
                    </div>
                </div>



            </div>


        );
    }

}


export default Register;