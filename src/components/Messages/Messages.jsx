import React from 'react';
import './Messages.css';
import {NavLink} from 'react-router-dom';

function Messages(props) {
    return (
        <div className="dialogs-main">
            <div className="dialogs">
                <div className="dialog-items">
                    <div className="dialog active">
                        <NavLink to="/messages/den">Den</NavLink>
                    </div>
                    <div className="dialog">
                        <NavLink to="/messages/sano">Sano</NavLink>
                    </div>
                    <div className="dialog">
                        <NavLink to="/messages/egor">Egor</NavLink>
                    </div>
                    <div className="dialog">
                        <NavLink to="/messages/masha">Masha</NavLink>
                    </div>
                </div>
            </div>
            <div className="messages">
                <div className="message">
                    Ola
                </div>
                <div className="message">
                    Ola bro
                </div>
                <div className="message">
                    Hows ya doing?
                </div>
            </div>
        </div>
    );
}

export default Messages;