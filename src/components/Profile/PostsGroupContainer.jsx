import { connect } from 'react-redux'
import PostsGroup from './PostsGroup'

let mapStateToProps = function(state) {
    return {
        posts: state.profilePage.posts
    }
};

let PostsGroupContainer = connect(mapStateToProps)(PostsGroup);

export default PostsGroupContainer