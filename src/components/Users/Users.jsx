import React from 'react'
import './Users.css'
import axios from 'axios'
import loader from './../../assets/loader.svg'
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
                        return <UserItem name ={item.name} status= {item.status} city={item.city} followed={item.followed} userId = {item.id} followUser={this.props.followUser}/>
                    })}
                </div>}
               
            </>
        )
    };
}

export default Users;