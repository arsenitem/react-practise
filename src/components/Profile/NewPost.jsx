import React from 'react';
import './NewPost.css';

function NewPost(props) {
    let newPost = React.createRef();
    let test = function() {
        props.store.createNewPost(props.store.getState().NewPostText);
    }
    let changeText = function() {
        props.store.updateTextArea(newPost.current.value);
    }
    return(
        <div>
            <textarea placeholder="your news..." ref={newPost} value = {props.store.getState().newPostText} onChange={changeText}>
            </textarea>   
            <button className="btn right" onClick={test}>Send</button>           
          </div>
    );
}

export default NewPost;