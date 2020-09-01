import { connect } from 'react-redux'
import Users from './Users'
import {followUser, getUsers, changeCurrentPage,toggleLoader, toggleFollowButton} from './../../data/userReducer'
let mapStateToProps = function(state) {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalPages: state.usersPage.totalPages,
        isFetching: state.usersPage.isFetching,
        followButtonDisabled: state.usersPage.followButtonDisabled,
    }
};
let actions = {followUser,getUsers,changeCurrentPage,toggleLoader, toggleFollowButton}

let UsersContainer = connect(mapStateToProps, actions)(Users);

export default UsersContainer