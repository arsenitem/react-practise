let initialState = {
    posts: [{message:"My first post",likes:"4", comments:"5"},
                {message:"My second post",likes:"2", comments:"3"},
                {message:"Developing...",likes:"11", comments:"7"} ],
    newPostText: "",
}

let profileReducer = function(state = initialState, action) {
    let stateCopy = {
        ...state,
        posts: [...state.posts]
    };
    switch(action.type) {
        case "CREATE-NEW-POST":
            let newPost = {message:state.newPostText,likes:"0", comments:"0"};
            stateCopy.posts.unshift(newPost); 
            stateCopy.newPostText = "";           
            break;
        case "UPDATE-NEW-POST-TEXT":
            stateCopy.newPostText = action.newText;
            break;
        default: return state;
    }
    return stateCopy;
}
export default profileReducer;