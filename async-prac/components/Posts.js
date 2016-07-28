/**
 * Created by chi on 7/28/16.
 */
import React from 'react';

export default class Posts extends React.Component{
    render() {
        return(
            <ul>
                {this.props.posts.map( (post, i) =>{
                    return (
                        <li key={i}>{post.title}</li>
                    );
                } )}
            </ul>
        );
    }
}

Posts.propTypes = {
    posts: React.PropTypes.array.isRequired
};