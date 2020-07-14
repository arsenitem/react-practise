import React from 'react';
import './PostsGroup.css';
import Post from './Post'
function PostsGroup() {
    return(
        <div className="posts">
            <Post message="post1" likes="4" comments= "0"/>
            <Post message="post2" likes="1" comments= "5"/>
        </div>
    );
}

export default PostsGroup;