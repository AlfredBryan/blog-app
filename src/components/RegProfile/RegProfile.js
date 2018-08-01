import React, { Component } from 'react';
import superagent from 'superagent';
import './RegProfile.css';
import Spinner from '../../Spinner/Spinner';
import Profile from './Profile';



class RegProfile extends Component {
    constructor() {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            date_of_birth: "",
            picture: "",
            profile: {},
            loading: false,
            errorMessage: '',
        }
    }

    showSpinner = () => {
        this.setState({ loading: true })
    }

    updateFirstname = (e) => {
        e.preventDefault()
        this.setState({ first_name: e.target.value })
    }
    updatepicture = (e) => {
        e.preventDefault()
        this.setState({ picture: e.target.value })
    }
    updateLastname = (e) => {
        e.preventDefault()
        this.setState({ last_name: e.target.value })
    }
    updateBio = (e) => {
        e.preventDefault()
        this.setState({ bio: e.target.value })
    }
    updateBirth = (e) => {
        e.preventDefault()
        this.setState({ date_of_birth: e.target.value })
    }


    createProfile = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')
        superagent
            .post('https://bionic-social.herokuapp.com/api/users/profile/')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                bio: this.state.bio,
                date_of_birth: this.state.date_of_birth
            })
            .end((error, response) => {
                if (response) {
                    this.setState({ profile: response, loading: false,})
                    localStorage.getItem('token', response.body.token)
                } else {
                    this.setState({ errorMessage: "Failed to create", loading: false });
                }
            });
    }

    render() {

        return (
            <div className="card2">
                <form className="main1" onSubmit={this.createProfile}>
                    <h1>Create Profile</h1>
                    <input
                        className="no1"
                        type="text"
                        placeholder="  Enter FirstName..."
                        onChange={this.updateFirstname}
                        value={this.state.first_name}
                    />
                    <input
                        className="no2"
                        type="text"
                        placeholder="  Enter LastName..."
                        onChange={this.updateLastname}
                        value={this.state.last_name}
                    />
                    <input
                        className="no3"
                        type="text"
                        placeholder="  Enter Bio..."
                        onChange={this.updateBio}
                        value={this.state.bio}
                    />
                    <input
                        className="no4"
                        onChange={this.updateBirth}
                        value={this.state.date_of_birth}
                        type="text"
                        placeholder="yy-mm-day"
                    />

                    <input
                        className="no5"
                        type="file"
                        onChange={this.updatepicture}
                        value={this.state.picture}
                    />
                    <button className="no6" onClick={this.showSpinner}>Submit</button>
                    <div className="spinner">{this.state.loading && <Spinner />}</div>
                    <p>{this.state.errorMessage}</p>
                </form>
                 <Profile profile={this.state.profile} /> 
            </div>
        )
    }
}

export default RegProfile;