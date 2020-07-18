import React from 'react';
import './NewPost.css';

function NewPost(props) {
    //let newPost = React.createRef();
    let test = function() {
        props.store.dispatch({type:"CREATE-NEW-POST"});
    }
    let changeText = function(e) {
        props.store.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:e.target.value});
        //props.store.updateTextArea(newPost.current.value);
    }
    return(
        <div>
            <textarea placeholder="your news..." value = {props.store.getState().profilePage.newPostText} onChange={changeText}>
            </textarea>   
            <button className="btn right" onClick={test}>Send</button>           
          </div>
    );
}

export default NewPost;