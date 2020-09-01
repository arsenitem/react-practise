let initialState = {
    users: [],
    currentPage:1,
    totalPages:1,
    isFetching: false,
    followButtonDisabled: false
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
        case "TOGGLE-LOADER": 
            stateCopy = {
                ...state,
                isFetching : !state.isFetching
            };
            return stateCopy;
        case "TOGGLE-FOLLOW-BUTTON":
            stateCopy = {
                ...state,
                followButtonDisabled : !state.followButtonDisabled
            };
        default: return state;
    }
}

export const followUser =(userId) => ({type:"FOLLOW",userId });
export const getUsers = (users,totalPages) => ({type:"GET-USERS", users, totalPages});
export const changeCurrentPage = (currentPage) => ({type: "CHANGE-CURRENT-PAGE", currentPage});
export const toggleLoader = () => ({type: "TOGGLE-LOADER"});
export const toggleFollowButton = () => ({type: "TOGGLE-FOLLOW-BUTTON"});

export default usersReducer;