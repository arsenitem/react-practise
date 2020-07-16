import React from 'react';
import './NewPost.css';

function NewPost(props) {
    let newPost = React.createRef();
    let test = function() {
        props.addPost(props.NewPostText);
    }
    let changeText = function() {
        props.updateText(newPost.current.value);
    }
    return(
        <div>
            <textarea placeholder="your news..." ref={newPost} value = {props.newPostText} onChange={changeText}>
            </textarea>   
            <button className="btn right" onClick={test}>Send</button>           
          </div>
    );
}

export default NewPost;