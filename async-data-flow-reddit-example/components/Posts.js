import React from 'react';

export default class Posts extends React.Component {
    render() {
        return(
            <ul>
                {
                    this.props.posts.map( (post, i) => {
                        return (
                            <li key={i}>
                                <h3>{post.title}</h3>
                                <p>{post.author}</p>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}