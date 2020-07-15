import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Profile/Content';
import Messages from './components/Messages/Messages';
import News from './components/News/News'
import Music from './components/Music/Music'
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App(props) {
  // let dialogsData = props.dialogsData;
  console.log(props.dialogsData)
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Nav/>       
        <div className="content">
          <Route component={Content} path="/profile"/>
          <Route path="/messages">
            <Messages dialogsData={props.dialogsData} messagesData = {props.messagesData}/>
          </Route>
          <Route component={News} path="/news"/>
          <Route component={Music} path="/music"/>
         
        </div>    
      </div>
    </BrowserRouter>
  );
}



export default App;
