import React from 'react';
import './PostsGroup.css';
import Post from './Post'
function PostsGroup(props) {
    let posts = props.posts.map(item => {
        return <Post message={item.message} likes={item.likes} comments= {item.comments}/>
    });
    return(
        <div className="posts">
            {posts}
        </div>
    );
}

export default PostsGroup;