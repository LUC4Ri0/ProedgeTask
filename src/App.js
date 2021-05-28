import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import FetchResult from './FetchResult';

const example = `{e.g : 1,2,3...}`;

const formSubmisson = () => {
  return false;
};

const App = () => {
  return (
    <div className="App">
      <div className="login-box">
        <h2>Challenge Task</h2>
        <form onSubmit = { formSubmisson }>
          <div className="user-box">
            <input type="text" name="" id="rollNumbers" />
            <label>Roll Number</label>
          </div>
          <h6><sup>*</sup>(Multiple Inputs Should be Comma Seperated { example } )</h6>
          <a href="#" onClick = { FetchResult }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
      <div className="loader" id = "load"></div>
      <div id="result"></div>
    </div>
  );
}
export default App;
