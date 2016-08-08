/**
 * Created by 9cjin on 8/8/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { loadUser, loadStarred } from '../actions';
import User from '../components/User';
import Repo from '../components/Repo';
import List from '../components/List';
import zip from 'lodash/zip';

function loadData(props){
    const { login } = props
    props.loadUser(login, [ 'name' ]);
    props.loadStarred(login);
}

class UserPage extends React.Component{
    constructor(props) {
        super(props);
        this.renderRepo = this.renderRepo.bind(this);
        this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    }
    componentWillMount() {
        loadData(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.login !== this.props.login) {
            loadData(nextProps)
        }
    }
    handleLoadMoreClick() {
        this.props.loadStarred(this.props.login, true)
    }
    renderRepo([ repo, owner ]) {
        return(
            <Repo
                repo={repo}
                owner={owner}
                key={repo.fullName}
            />
        );
    }
    render() {
        const { user, login } = this.props;
        if(!user) {
            return <h1><i>Loading { login }'s profile...</i></h1>
        }
        const { starredRepos, starredRepoOwners, starredPagination } = this.props;
        return (
            <div>
                <User user={user} />
                <hr/>
                <List
                    renderItem={this.renderRepo}
                    items={zip(starredRepos, starredRepoOwners)}
                    onLoadMoreClick={this.handleLoadMoreClick}
                    loadingLabel={`loading ${login}'s starred...`}
                    {...starredPagination}
                />
            </div>
        );
    }
}

UserPage.propTypes = {
    login: React.PropTypes.string.isRequired,
    user: React.PropTypes.object,
    starredPagination: React.PropTypes.object,
    starredRepos: React.PropTypes.array.isRequired,
    starredRepoOwners: React.PropTypes.array.isRequired,
    loaderUser: React.PropTypes.func.isRequired,
    loadStarred: React.PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {
    const login = ownProps.params.login.toLowerCase();
    const {
        pagination: { starredByUser },
        entities: { users, repos }
    } = state;

    const starredPagination = starredByUser[login] || { id: [] };
    const starredRepos = starredPagination.ids.map(id => repos[ids]);
    const starredRepoOwners = starredRepos.map(repo => users[repo.owner]);

    return {
        login,
        starredRepos,
        starredRepoOwners,
        starredPagination,
        user: users[login]
    }
}

export default connect(mapStateToProps, {
    loadUser,
    loadStarred
})(UserPage);