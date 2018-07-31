import React, { Component } from 'react';
import superagent from 'superagent';
import { Redirect } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            loggedIn: false,
            loading: false
        }
    }

    showSpinner = () => {
        this.setState({ loading: true })
    }

    emailhandleChange = (e) => {
        this.setState({ email: e.target.value.toLowerCase() })
    }

    passwordhandleChange = (e) => {
        this.setState({ password: e.target.value })
    }

    login = (e) => {
        e.preventDefault();
        superagent
            .post('https://bionic-social.herokuapp.com/api/login')
            .set('Accept', 'application/json')
            .send({ username_or_email: this.state.email.trim(), password: this.state.password.trim() })
            .end((error, response) => {
                if (response.status === 200) {
                    this.setState({ loggedIn: true })
                    localStorage.setItem('token', response.body.token)
                } else {
                    this.setState({ errorMessage: "Authentication Failed", loading: false });
                }
            });
    }



    render() {
        if (this.state.loggedIn) {
            return (<Redirect to={'/regprofile'} />)
        }

        return (
            <div>
                <div className="center">
                    <div className="card">
                        <h1>Login</h1>
                        <form onSubmit={this.login}>
                            <input
                                className="form-item"
                                placeholder="  Enter Email..."
                                type="text"
                                onChange={this.emailhandleChange}
                                value={this.state.email}
                            />
                            <input
                                className="form-item"
                                placeholder="  Enter Password..."
                                type="password"
                                value={this.state.password}
                                onChange={this.passwordhandleChange}
                            />
                            <input
                                className="form-submit"
                                value="SUBMIT"
                                type="submit"
                                onClick={this.showSpinner}
                            />
                            <p className="spinner">{this.state.loading && <Spinner />}</p>
                        </form>
                        <p>{this.state.errorMessage}</p>
                        
                    </div>
                </div>
            </div>


        );
    }

}


export default Login;