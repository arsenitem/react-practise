import axios from 'axios'
let initialState = {
    users: [
        // {userId:1,fio:"Vasiliy D.", status:"looking for food...", city:"Russia, Perm", following: false},
        // {userId:2,fio:"Ivan A.", status:"reacr cool", city: "Russia, Perm", following: true},
    ],
    currentPage:1,
    totalPages:1
}

let usersReducer = function(state = initialState, action) {
    let stateCopy;
    switch(action.type) {
        case "FOLLOW":
            stateCopy = {
                ...state,
                users: [...state.users]
            };
            let user = stateCopy.users.find((item) =>{
                if(item.id == action.userId) {
                    return item;
                };
            });
            if (user.followed) {
                user.followed = false;
            } else {
                user.followed = true;
            }
            return stateCopy;
        case "GET-USERS":
            // axios.get(`http://localhost:3001/users?page=${state.currentPage}`).then((users) => {
            //     stateCopy = {
            //         ...state,
            //         users:users.data.users,
            //         totalPages: users.data.pages
            //     };
            //     return stateCopy;
            // });  
            stateCopy = {
                ...state,
                users:action.users,
                totalPages: action.totalPages
            };
            return stateCopy;
        case "CHANGE-CURRENT-PAGE":
            stateCopy = {
                ...state,
                currentPage: action.currentPage
            };
            return stateCopy;
        default: return state;
    }
}
export default usersReducer;