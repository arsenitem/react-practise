import { connect } from 'react-redux'
import Users from './Users'

let mapStateToProps = function(state) {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = function(dispatch) {
    return {
        followUser: (id) => {
            dispatch({type:"FOLLOW", userId: id});
        },

        getUsers: (users) => {
            dispatch({type:"GET-USERS", users: users});
        }
       
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer