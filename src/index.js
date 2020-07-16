import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import state from './data/state';
import {createNewPost, updateTextArea, initRerender} from './data/state';

function reRenderDom() {
  ReactDOM.render(
    <React.StrictMode>
      <App appState = {state} addPost = {createNewPost} updateText = {updateTextArea}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
reRenderDom();
initRerender(reRenderDom);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
