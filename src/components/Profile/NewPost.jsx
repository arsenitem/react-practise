import React from 'react';
import './NewPost.css';

function NewPost(props) {
    return(
        <div>
            <textarea placeholder="your news..." value = {props.newPostText} onChange={(e) => {props.updateNewPostText(e.target.value)}}>
            </textarea>   
            <button className="btn right" onClick={props.createNewPost}>Send</button>           
          </div>
    );
}

export default NewPost;