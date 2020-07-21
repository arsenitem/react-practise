import { connect } from 'react-redux'
import NewPost from './NewPost'
import {createNewPost, updateNewPostText} from './../../data/profileReducer';
let mapStateToProps = function(state) {
    return {
        newPostText: state.profilePage.newPostText
    }
};

let NewPostContainer = connect(mapStateToProps, {createNewPost, updateNewPostText})(NewPost);

export default NewPostContainer;