import React from 'react';
import './App.css';
import ContactList from './Components/ContactList'
import MainContact from './Components/MainContact'
import {Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
     <MainContact/>
     <Route exact path='/ContactList' component={ContactList}/>
     
    </div>
  );
}

export default App;
