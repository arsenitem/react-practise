import React from 'react'
import { connect } from 'react-redux'
import Messages from './Messages'
import {createNewMessage, updateNewMessageText} from './../../data/dialogsReducer';
let mapStateToProps = function(state) {
    return {
        dialogs : state.dialogsPage.dialogs,
        messages : state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        newElem: state.dialogsPage.newElem
    }
};

let MessagesContainer = connect(mapStateToProps, {createNewMessage, updateNewMessageText})(Messages);

export default MessagesContainer;