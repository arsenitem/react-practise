import React from 'react';
import './Post.css';

function Post(props) {
    return(
        <div className="post">
            <div className="postava">
            </div>
            <div className="posttext">
            {props.message}
            </div>
            <div className="stats">
                likes:{props.likes} comments: {props.comments}
            </div>
        </div>
    );
}

export default Post;