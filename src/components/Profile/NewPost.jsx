import React from 'react';
import './NewPost.css';

function NewPost() {
    return(
        <div>
            <textarea placeholder="your news...">
            </textarea>   
            <button className="btn right">Send</button>           
          </div>
    );
}

export default NewPost;