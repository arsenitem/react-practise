let initialState = {
    posts: [{message:"My first post",likes:"4", comments:"5"},
                {message:"My second post",likes:"2", comments:"3"},
                {message:"Developing...",likes:"11", comments:"7"} ],
    newPostText: "",
    profile:null,
}

let profileReducer = function(state = initialState, action) {
    let stateCopy
    switch(action.type) {
        case "CREATE-NEW-POST":
            let newPost = {message:state.newPostText,likes:"0", comments:"0"};
            stateCopy = {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            };
            // stateCopy.posts.unshift(newPost); 
            // stateCopy.newPostText = "";  
            return stateCopy;         
        case "UPDATE-NEW-POST-TEXT":
            stateCopy = {
                ...state,
                newPostText: action.newText
            };
            // stateCopy.newPostText = action.newText;
            return stateCopy;
        case "UPDATE-PROFILE-INFO": 
            stateCopy = {
                ...state,
                profile: action.profile
            };
            return stateCopy;
        default: return state;
    }
}

export const createNewPost = () => ({type:"CREATE-NEW-POST"});
export const updateNewPostText = (newText) => ({type:"UPDATE-NEW-POST-TEXT", newText});
export const updateProfileInfo = (profile) => ({type:"UPDATE-PROFILE-INFO", profile});
export default profileReducer;