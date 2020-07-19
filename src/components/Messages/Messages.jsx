import React from 'react';
import './Messages.css';
import {NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
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
                <div className={"msg " + props.position}>
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
    let dialogElements =  props.dialogs.map((item) => {
        return <DialogItem id={item.id} name={item.name}/>
    });

    let messageElements = props.messages.map( (item, index) => {
        if (index == 0) {
            return (<CSSTransition timeout={300} classNames="animated" in ={props.newElem}>
                <Message message={item.message} datetime={item.datetime} position ={item.position}/>     
            </CSSTransition>)
           
        } else {
            return <Message message={item.message} datetime={item.datetime} position ={item.position}/>    
        }
        
    });
       
    return (
        <div className="dialogs-main">
            <div className="dialogs">
                <div className="dialog-items">                
                    {dialogElements}
                </div>
            </div>
            <div className="messages">
                <div className="msg-input">
                   <textarea placeholder="new message" value = {props.newMessageText} onChange={props.changeMsgText}>

                   </textarea>
                </div>
                <button className="btn right" onClick={props.newMessage}>Send</button>
     
                {messageElements}
            </div>
        </div>
    );
}

export default Messages;