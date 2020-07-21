import React from 'react';
import Axios from 'axios';
import Loader from '../Common/Loader';
import userIcon from './../../assets/userIcon.jpg';
class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.toggleLoader();
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then(res => {
            this.props.updateProfileInfo(res.data);
            this.props.toggleLoader();
        })
    }
    render() {
        if (!this.props.profile) {
            return <Loader isFetching = {this.props.isFetching}/>
        } else {
            return(
            
                <div className="avatarDescription">
                    <div className="av">
                    <img id ="avatar" src={this.props.profile.photos.large ? this.props.profile.photos.large : userIcon}/>
                    </div>
                    <div className="desc">
                        <h3>{this.props.profile.fullName}</h3>
                        {this.props.profile.aboutMe}<br/>
                        <h4>Contacts:</h4>
                        <a href={this.props.profile.contacts.facebook}>{this.props.profile.contacts.facebook}</a><br/>
                        <a href={this.props.profile.contacts.website}>{this.props.profile.contacts.website}</a>
                        <a href={this.props.profile.contacts.vk}>{this.props.profile.contacts.vk}</a>
                        <a href={this.props.profile.contacts.twitter}>{this.props.profile.contacts.twitter}</a>
                        <a href={this.props.profile.contacts.instagram}>{this.props.profile.contacts.instagram}</a>
                        <a href={this.props.profile.contacts.github}>{this.props.profile.contacts.github}</a>
                    </div>
               
            </div>
            )
        }
       
    };
}

export default ProfileInfo;