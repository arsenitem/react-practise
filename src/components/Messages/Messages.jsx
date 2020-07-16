import React from 'react';
import './Messages.css';
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
    return (
        <div>
            <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"></img>
            <div className="dialog active">
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
       
    );
}

function Message(props) {
    return(
        <div className="message">
            <div class={"msg " + props.position}>
                <div className="msg-text">
                    {props.message}
                </div>
                <div className="msg-info">
                    {props.datetime}
                </div>
            </div>
        </div>
    );
}
function Messages(props) {
    let dialogElements =  props.dialogsData.map((item) => {
        return <DialogItem id={item.id} name={item.name}/>
    });

    let messageElements = props.messagesData.map(item => <Message message={item.message} datetime={item.datetime} position ={item.position}/>)
   
    let msg = React.createRef();
    let newMessage = function() {
        
        alert(msg.current.value)
    }
    return (
        <div className="dialogs-main">
            <div className="dialogs">
                <div className="dialog-items">                
                    {dialogElements}
                </div>
            </div>
            <div className="messages">
                <div className="msg-input">
                   <textarea placeholder="new message" ref={msg}></textarea>
                </div>
                <button className="btn right" onClick={newMessage}>Send</button>
     
                {messageElements}
            </div>
        </div>
    );
}

export default Messages;