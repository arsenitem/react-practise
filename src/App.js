import React from 'react';
import logo from './logo.svg';
import HeaderComponent from './components/Header/HeaderComponent';
import Content from './components/Profile/Content';
import Users from './components/Users/Users'
import News from './components/News/News'
import Music from './components/Music/Music'
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import NavContainer from './components/Nav/NavContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderComponent/>
        <NavContainer/>       
        <div className="content">
          <Route path="/profile/:userId">
            <Content/>
          </Route>
          <Route path="/messages">
            <MessagesContainer/>
          </Route>
          <Route component={UsersContainer} path="/users"/>
          <Route component={News} path="/news"/>
          <Route component={Music} path="/music"/>
         
        </div>    
      </div>
    </BrowserRouter>
  );
}



export default App;
