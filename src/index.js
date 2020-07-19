import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
//import store from './data/state';
import  store  from './data/store.js';
import { Provider } from 'react-redux';


  ReactDOM.render(
    <React.StrictMode>
      <Provider store ={store}>
        <App />
      </Provider>
      
    </React.StrictMode>,
    document.getElementById('root')
  );


// reRenderDom(store);

// store.initRerender(reRenderDom);

// store.subscribe(() => {
//   reRenderDom(store)
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
