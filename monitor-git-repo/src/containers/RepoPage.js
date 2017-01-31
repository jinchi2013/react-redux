"use strict";
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadRepo, loadStargazers } from '../action';
import Repo from '../components/Repo';
import User from '../components/User';
import List from '../components/List';

const loadData = props => {
    const { fullName } = props;
    props.loadRepo(fullName, ['description']);
    props.loadStargazers(fullName);
};

class RepoPage extends Component {

    handleLoadMoreClick () {
        this.props.loadStargazers(this.props.fullName, true);
    }

    renderUser(user) {
        return <User user={user} key={user.login} />
    }

    render () {
        return (
            <div>
                <Repo
                    repo={repo}
                    owner={owner}/>
                <hr/>
                <List
                    renderItem={this.renderUser}
                    items={stargazers}
                    onLoadMoreClick={this.handleLoadMoreClick}
                    loadingLabel={`Loading stargazers of ${name}...`}
                    {...stargazersPagination} />
            </div>
        );
    }
}
