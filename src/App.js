import React from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantContainer from './RestaurantContainer'
import Home from './Home'
import Error from './Error'
import { Route,Switch } from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <div>
        <h1 className="banner">The Restaurant Dream</h1>
        <Switch>
          {/* <Route path="/restaurants" component={RestaurantContainer}/> */}
          <Route path="/home" component={Home}/>
          <Route path="/" component={Error}/>
        </Switch>
      </div>
    )
  }
}

export default App;