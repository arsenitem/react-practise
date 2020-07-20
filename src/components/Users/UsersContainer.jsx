import { connect } from 'react-redux'
import Users from './Users'

let mapStateToProps = function(state) {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalPages: state.usersPage.totalPages
    }
};
let mapDispatchToProps = function(dispatch) {
    return {
        followUser: (id) => {
            dispatch({type:"FOLLOW", userId: id});
        },

        getUsers: (users, totalPages) => {
            dispatch({type:"GET-USERS", users: users, totalPages: totalPages});
        },

        changeCurrentPage: (currentPage) => {
            dispatch({type:"CHANGE-CURRENT-PAGE", currentPage: currentPage});
        }
       
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer