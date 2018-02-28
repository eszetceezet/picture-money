import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Title text</h2>
        </div>
        <div class="container">

          <div class="row">
            <div class="col-sm-12">
              <h3>Subtitle</h3>
              <p>Explanation</p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
	          <form class="form-inline" action="">
	            <label for="email">Email address:</label>
	            <input type="email" class="form-control" id="email">
	            <label for="pwd">Password:</label>
	            <input type="password" class="form-control" id="pwd">
	            <div class="form-check">
	              <label class="form-check-label">
	                <input class="form-check-input" type="checkbox"> Remember me
	              </label>
	            </div>
	            <button type="submit" class="btn btn-primary">Picture</button>
	          </form>
            </div>
          </div>


        </div>
      </div>      
    );
  }
}

export default App;
