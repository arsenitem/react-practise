import React from 'react';
import './Content.css';
import NewPost from './NewPost'
import PostsGroup from './PostsGroup'
import ProfileInfo from './ProfileInfo';
import NewPostContainer from './NewPostContainer';
import PostsGroupContainer from './PostsGroupContainer';
import ProfileInfoContainer from './ProfileInfoContainer';
function Content(props) {
    return(
        <div>
        <div>
          <img id ="topimg" src="data:image/jpeg;base64,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"/>
        </div>
        <div className="avatarDescription">
          <ProfileInfoContainer/>
        </div>
        <div className="posts">
        <h4 id ="postslabel">My posts</h4>
          <NewPostContainer/>
          <PostsGroupContainer/>
          {/* <NewPost store = {props.store}/> */}
          {/* <PostsGroup store = {props.store}/> */}
        </div>
      </div>
    );
}

export default Content;