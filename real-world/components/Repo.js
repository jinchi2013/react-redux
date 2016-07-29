/**
 * Created by 9cjin on 7/29/16.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Repo extends React.Component{
    render(){
        const { repo, owner } = this.props;
        const { login } = owner;
        const { name, description } = repo;

        return (
            <div className="Repo">
                <h3>
                    <Link to={`/${login}/${name}`}>
                        {name}
                    </Link>
                    { 'by' }
                    <Link to={`/${login}`} >
                        { login }
                    </Link>
                </h3>
                { description && <p>{description}</p> }
            </div>
        );
    }
}

Repo.propTypes = {
    repo: React.PropTypes.shape(
        {
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string
        }
    ).isRequired,
    owner: React.PropTypes.shape(
        {
            login: React.PropTypes.string.isRequired
        }
    ).isRequired
}