import React from 'react';
import './NewPost.css';

function NewPost(props) {
    return(
        <div>
            <textarea placeholder="your news..." value = {props.newPostText} onChange={props.changeText}>
            </textarea>   
            <button className="btn right" onClick={props.createNewPost}>Send</button>           
          </div>
    );
}

export default NewPost;