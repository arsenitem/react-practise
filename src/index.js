import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import store from './data/state';
import {createNewPost, updateTextArea, initRerender} from './data/state';

function reRenderDom() {
  ReactDOM.render(
    <React.StrictMode>
      <App store = {store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
reRenderDom();
store.initRerender(reRenderDom);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
