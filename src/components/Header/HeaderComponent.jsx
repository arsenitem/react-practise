
import React from 'react';
import Header from './Header';
import axios from 'axios'
import {setUserData} from './../../data/auth-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class HeaderComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((response) => {
            if(response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                this.props.setUserData(id, email, login);
                this.props.history.push(`/profile/${id}`);
            }
        });   
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = function(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

let actions = {setUserData};
export default connect(mapStateToProps, actions)(withRouter(HeaderComponent));