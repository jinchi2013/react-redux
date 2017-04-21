/**
 * Created by 9cjin on 7/29/16.
 */
import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component{
    render(){
        const { login, avatarUrl, name } = this.props.user;

        return (
            <div>
                <Link
                    to={`/${login}`}
                >
                    <img src={avatarUrl} width='72' height='72' />
                    <h3>
                        {login} {name && <span>({name})</span>}
                    </h3>
                </Link>
            </div>
        );
    }
}

User.propTypes = {
    user: React.PropTypes.shape(
        {
            login: React.PropTypes.string.isRequired,
            avatarUrl: React.PropTypes.string.isRequired,
            name: React.PropTypes.string
        }
    ).isRequired
}