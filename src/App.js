import React from 'react';
import HomePage from '../src/pages/homepages/homepage.component';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
