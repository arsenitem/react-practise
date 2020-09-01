import React from 'react'
import './Users.css'
import axios from 'axios'
import loader from './../../assets/loader.svg'
import { NavLink } from 'react-router-dom'
import userIcon from './../../assets/userIcon.jpg';
import {usersApi} from './../../api/api';

function UserItem(props) {
    let buttonText = props.followed == true ? "Unfollow" : "Follow";


    return (
        <div className="userItem">
            <div className="userAvatar">
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small ? props.photos.small : userIcon} >
                    </img>
                </NavLink>
               
                <button className="btn" onClick={() =>{props.followUser(props)}}>{buttonText}</button>
            </div>
            <div className="userInfo">
                <div className="userFio">
                    {props.name}
                </div>
                <div className="userStatus">
                    {props.status}
                </div>
                <div className="userCity">
                    {props.city}
                </div>
            </div>
        </div>
    )
}
class Users extends React.Component {
    constructor(props) {
        super(props);
        
    }
    getUsers = () => {
        this.props.toggleLoader();   
        usersApi.getUsers(this.props.currentPage).then((users) => {
            let pages = Math.ceil(users.data.totalCount / 1000)
            this.props.getUsers(users.data.items, pages);
            this.props.toggleLoader();   
        });   
    };

    pageClick = (item) => {
        this.props.changeCurrentPage(item);
        this.props.toggleLoader();  
        usersApi.getUsers(item).then((users) => {
            let pages = Math.ceil(users.data.totalCount / 1000)
            this.props.getUsers(users.data.items, pages);
            this.props.toggleLoader();
        });
    }
        
    componentDidMount() {
        this.getUsers();
    };

    onUserFollow(userInfo) {
        if (userInfo.followed) { 
            usersApi.unfollowUser(userInfo.id).then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.followUser(userInfo.id);
                }
            });   
            
        } else {
            usersApi.followUser(userInfo.id).then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.followUser(userInfo.id);
                }
                
            });           
        }
        
        
    };

    render() {
        let pages = []
        for(let i=1; i<=this.props.totalPages;i++) {
            pages.push(i);
        }

        return(
            <>         
                {this.props.isFetching ? 
                <div className="loader">
                    <img src={loader}/>
                </div> :   
                <div>
                    <div className="pagination">
                    {pages.map(item => {
                        return <span onClick={() => this.pageClick(item)} className={this.props.currentPage === item && "active-page"}>{item}</span>
                    })}
                    </div>
                    {this.props.users.map(item => {
                        return <UserItem {...item} followUser={this.onUserFollow.bind(this)}/>
                    })}
                </div>}
               
            </>
        )
    };
}

export default Users;