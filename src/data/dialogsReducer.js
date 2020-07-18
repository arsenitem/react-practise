let initialState = {
    dialogs:[{id: "1", name: "Den"},{id: "2", name: "Sano"},{id: "3", name: "Egor"},{id: "4", name: "Mashs"}],

    messages:[{message: "Ola", datetime:"25.06.2020 18:36", position:"left"},
            {message: "Ola bro", datetime:"25.06.2020 18:36", position:"right"},
            {message: "Hows ya doings", datetime:"25.06.2020 18:36", position:"left"}],
    newMessageText: "",
}
let dialogsReducer = function(state = initialState, action) {
    switch(action.type) {
        case "CREATE-NEW-MESSAGE":
            let newMessage = {message:state.newMessageText,datetime: new Date().toLocaleString(), position:"left"};
            state.messages.unshift(newMessage); 
            state.newMessageText = "";
        break;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText;
        break;
        default: return state;
    }
    return state;
}
export default dialogsReducer;