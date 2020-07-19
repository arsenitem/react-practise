let initialState = {
    users: [
        // {userId:1,fio:"Vasiliy D.", status:"looking for food...", city:"Russia, Perm", following: false},
        // {userId:2,fio:"Ivan A.", status:"reacr cool", city: "Russia, Perm", following: true},
    ]
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
            stateCopy = {
                ...state,
                users:action.users
            };
            debugger;
            return stateCopy;
        default: return state;
    }
}
export default usersReducer;