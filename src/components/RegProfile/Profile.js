import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.profile.first_name}</li>
                <li>{this.props.profile.last_name}</li>
                <li>{this.props.profile.bio}</li>
                <li>{this.props.profile.date_of_birth}</li>
            </ul>
        );
    }
}





export default Profile;