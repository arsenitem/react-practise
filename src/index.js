import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let dialogData = [{id: "1", name: "Den"},{id: "2", name: "Sano"},{id: "3", name: "Egor"},{id: "4", name: "Mashs"}];

let messageData = [{message: "Ola", datetime:"25.06.2020 18:36", position:"left"},
    {message: "Ola bro", datetime:"25.06.2020 18:36", position:"right"},
    {message: "Hows ya doings", datetime:"25.06.2020 18:36", position:"left"}];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogData} messagesData = {messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
