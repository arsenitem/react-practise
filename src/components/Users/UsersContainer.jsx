import { connect } from 'react-redux'
import Users from './Users'
import {followUser, getUsers, changeCurrentPage,toggleLoader} from './../../data/userReducer'
let mapStateToProps = function(state) {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalPages: state.usersPage.totalPages,
        isFetching: state.usersPage.isFetching,
    }
};
let actions = {followUser,getUsers,changeCurrentPage,toggleLoader}

let UsersContainer = connect(mapStateToProps, actions)(Users);

export default UsersContainer