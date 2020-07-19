import { connect } from 'react-redux'
import NewPost from './NewPost'

let mapStateToProps = function(state) {
    return {
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = function(dispatch) {
    return {
        createNewPost: () => {
            dispatch({type:"CREATE-NEW-POST"});
        },
        changeText: (e) => {
            dispatch({type:"UPDATE-NEW-POST-TEXT", newText:e.target.value});
        }
    }
}
let NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;