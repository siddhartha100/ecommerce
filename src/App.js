import React from 'react';
import HomePage from '../src/pages/homepages/homepage.component';
import './App.css';
import {Route, Switch} from 'react-router-dom';


const HatsPage = () => {
  return (<div><h1>Hat's Page</h1></div>)
};


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
