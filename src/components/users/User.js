import React, { Component, Fragment } from 'react'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const {
            name, 
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            hireable
        } = this.props.user;
        const { loading } = this.props;
        return (
            <Fragment>
                <div>{name}</div>
                <div>{bio}</div>
            </Fragment>
            
        )
    }
}

export default User
