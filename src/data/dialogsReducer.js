let initialState = {
    dialogs:[{id: "1", name: "Den"},{id: "2", name: "Sano"},{id: "3", name: "Egor"},{id: "4", name: "Mashs"}],

    messages:[{message: "Ola", datetime:"25.06.2020 18:36", position:"left"},
            {message: "Ola bro", datetime:"25.06.2020 18:36", position:"right"},
            {message: "Hows ya doings", datetime:"25.06.2020 18:36", position:"left"}],
    newMessageText: "",
    newElem:false
}
let dialogsReducer = function(state = initialState, action) {
    let stateCopy = {...state}
    switch(action.type) {
        case "CREATE-NEW-MESSAGE":
            let newMessage = {message:state.newMessageText,datetime: new Date().toLocaleString(), position:"left"};
            stateCopy.messages.unshift(newMessage); 
            stateCopy.newMessageText = "";
            stateCopy.newElem = true;
            setTimeout(()=> {
                stateCopy.newElem = false;
            }, 1000);
        break;
        case "UPDATE-NEW-MESSAGE-TEXT":
            stateCopy.newMessageText = action.newText;
        break;
        default: return state;
    }
    return stateCopy;
}
export default dialogsReducer;