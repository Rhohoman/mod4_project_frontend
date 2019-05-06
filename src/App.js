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
      <div className="App">
        <Switch>
          <Route path="/restaurants" component={RestaurantContainer}/>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Error}/>
        </Switch>
      </div>
    )
  }
}

export default App;



{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}