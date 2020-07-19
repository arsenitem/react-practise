import React from 'react'
import './Users.css'
import axios from 'axios'
function UserItem(props) {
    let buttonText = props.followed == true ? "Unfollow" : "Follow"
    return (
        <div className="userItem">
            <div className="userAvatar">
                <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg">
                </img>
                <button className="btn" onClick={() =>{props.followUser(props.userId)}}>{buttonText}</button>
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
        this.getUsers();
    }
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((users) => {
                this.props.getUsers(users.data.items);      
            });
        }
    }
    userItems = this.props.users.map(item => 
        <UserItem name ={item.name} status= {item.status} city={item.city} followed={item.followed} userId = {item.id} followUser={this.props.followUser}/>
    );

    render() {
        return(
            <div>
                {this.props.users.map(item => {
                    return <UserItem name ={item.name} status= {item.status} city={item.city} followed={item.followed} userId = {item.id} followUser={this.props.followUser}/>
                })}
            </div>
        )
    }
}

export default Users;