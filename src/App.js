import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <form>
      <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" id="email"></input>
    </div>
    <div class="form-group">
     <label for="pwd">Password:</label>
     <input type="password" class="form-control" id="pwd"></input>
    </div>
    <div class="checkbox">
    <label>  Remember me </label>
    <input type="checkbox"></input>
    </div>
    </form>
    <button type="submit" class="btn btn-default">Submit</button>
    </div>
  );
}

export default App;
