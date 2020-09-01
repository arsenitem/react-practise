import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

let mapStateToProps = function(state) {
    return {
        currentUserId: state.auth.userId,
    }
};

let NavContainer = connect(mapStateToProps, {})(Nav);

export default NavContainer;