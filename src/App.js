import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import List from "./list";
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style = {{backgroundColor : "grey", color:"white"}}>Hello Hackers!</h1>
      <hr />
          <List />
      </div>
    );
  }
} 

export default App;
