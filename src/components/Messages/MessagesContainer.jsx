import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'
let mapStateToProps = function(state) {
    return {
        dialogs : state.dialogsPage.dialogs,
        messages : state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        newElem: state.dialogsPage.newElem
    }
};

let mapDispatchToProps = function(dispatch) {
    return {
        newMessage: () => {
            dispatch({type:"CREATE-NEW-MESSAGE"});          
        },
        changeMsgText: (e) => {
            dispatch({type:"UPDATE-NEW-MESSAGE-TEXT", newText:e.target.value});
        }
    }
}
let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;