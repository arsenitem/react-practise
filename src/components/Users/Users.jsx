import React from 'react'
import './Users.css'
import axios from 'axios'
import loader from './../../assets/loader.svg'
import { NavLink } from 'react-router-dom'
import userIcon from './../../assets/userIcon.jpg';
function UserItem(props) {
    let buttonText = props.followed == true ? "Unfollow" : "Follow"
    return (
        <div className="userItem">
            <div className="userAvatar">
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small ? props.photos.small : userIcon} >
                    </img>
                </NavLink>
               
                <button className="btn" onClick={() =>{props.followUser(props.id)}}>{buttonText}</button>
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
        // axios.get(`http://localhost:3001/users?page=${this.props.currentPage}`).then((users) => {
        //     this.props.getUsers(users.data.users, users.data.pages);
        // });  
        this.props.toggleLoader();   
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`).then((users) => {
            let pages = Math.ceil(users.data.totalCount / 1000)
            this.props.getUsers(users.data.items, pages);
            this.props.toggleLoader();   
        });   
    };

    pageClick = (item) => {
        this.props.changeCurrentPage(item);
        // axios.get(`http://localhost:3001/users?page=${item}`).then((users) => {
        //     this.props.getUsers(users.data.users, users.data.pages);
        // });
        this.props.toggleLoader();  
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}`).then((users) => {
            let pages = Math.ceil(users.data.totalCount / 1000)
            this.props.getUsers(users.data.items, pages);
            this.props.toggleLoader();
        });
    }
        
    componentDidMount() {
        this.getUsers();
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
                        return <UserItem {...item} followUser={this.props.followUser}/>
                    })}
                </div>}
               
            </>
        )
    };
}

export default Users;