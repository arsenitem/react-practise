import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo'
import {updateProfileInfo} from './../../data/profileReducer';
import {toggleLoader} from './../../data/userReducer';
import { withRouter } from 'react-router-dom';
let mapStateToProps = function(state){
    return {
        profile: state.profilePage.profile,
        isFetching: state.usersPage.isFetching,
    }
}

let ProfileInfoContainer = connect(mapStateToProps, {updateProfileInfo, toggleLoader})(withRouter(ProfileInfo));

export default ProfileInfoContainer;