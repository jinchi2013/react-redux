import React from 'react';
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    componentDidMount() {
        /**
         * this is executed after first render only on the client side
         * This is where AJAX requests and DOM or state updates should occur
         * */
        let { dispatch, selectedReddit } = this.props;
        dispatch( fetchPostsIfNeeded(selectedReddit) );
    }

    componentWillReceiveProps(nextProps) {
        /**
         * This method is invoked as soon as the props are updated before another render is called.
         * */
        if(nextProps.selectedReddit !== this.props.selectedReddit) {
            let { dispatch, selectedReddit } = nextProps;
            dispatch( fetchPostsIfNeeded(selectedReddit) );
        }
    }

    handleChange(nextReddit) {
        this.props.dispatch( selectReddit(nextReddit) );
    }

    handleRefreshClick(e) {
        e.preventDefault();

        let { dispatch, selectedReddit } = this.props;
        dispatch( invalidateReddit(selectedReddit) );
        dispatch( fetchPostsIfNeeded(selectedReddit) );
    }

    render() {
        // the variable below is coming from state
        let { selectedReddit, posts, isFetching, lastUpdated } = this.props;
        let isEmpty = posts.lengh === 0;
        return (
            <div>
                <Picker options={['reactjs', 'frontEnd']}
                        value={selectedReddit}
                        onChange={this.handleChange} />

                <p>
                    {
                        lastUpdated &&
                        <span>last updated at { new Date(lastUpdated).toLocaleTimeString() }!</span>
                    }
                    {
                        !isFetching &&
                        <a href="#" onClick={this.handleRefreshClick}>Refrech</a>
                    }
                </p>
                {
                    isEmpty ?
                        (isFetching ? <h2>Loading...</h2> : <h2>Empty</h2>) :
                        <div style= {
                            {
                                opacity : isFetching ? 0.5 : 1
                            }
                        } >
                            <Posts posts={posts}/>
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

const mapStateToProps = (state) => {
    let { selectedReddit, postsByReddit } = state;
    let {
        isFetching,
        lastUpdated,
        items: posts
    } = postsByReddit[selectedReddit] || { isFetching: true, items: [] };

// the return the object will assign to this.props
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