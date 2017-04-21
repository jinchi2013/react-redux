/**
 * Created by chi on 7/28/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    componentDidMount() {
        const { dispatch, selectedReddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedReddit));
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps;
            dispatch(fetchPostsIfNeeded((selectedReddit)));
        }
    }

    handleChange(nextReddit) {
        this.props.dispatch(selectReddit(nextReddit))
    }

    handleRefreshClick(e){
        e.preventDefault();

        const { dispatch, selectedReddit } = this.props;
        dispatch(invalidateReddit(selectedReddit));
        dispatch(fetchPostsIfNeeded(selectedReddit));
    }
    render(){
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
        const isEmpty = posts.length ===0;
        return (
            <div>
                <Picker
                    value={selectedReddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontEnd']}
                />
                <p>
                    {
                        lastUpdated &&
                            <span>
                                last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            </span>
                    }
                    {
                        !isFetching &&
                            <a
                                href="#"
                                onClick={this.handleRefreshClick}
                            >
                                Refresh
                            </a>
                    }
                </p>
                {
                    isEmpty ?
                        (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>) :
                        <div style={
                            {
                                opacity: isFetching ? 0.5 : 1
                            }
                        } >
                            <Posts posts={posts} />
                        </div>
                }
            </div>
        );

    }
}

App.propTypes = {
    selectedReddit: React.PropTypes.string.isRequired,
    posts: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    lastUpdated: React.PropTypes.number,
    dispatch: React.PropTypes.func.isRequired
};

const mapStateToProps = (state)=> {
    const { selectedReddit, postsByReddit } = state;
    const {
            isFetching,
            lastUpdated,
            items: posts
        } = postsByReddit[selectedReddit] || { isFetching: true, items: [] };

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    };

};

export default connect(
    mapStateToProps
)(App);