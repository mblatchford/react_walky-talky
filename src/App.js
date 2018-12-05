import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
const leetify = require('leetify');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      upper: "",
      leet: ""
    }
  }

  _onChange = (e) => {
    
    this.setState({
        input: e, 
        upper: e.toUpperCase(),
        leet: leetify(e)
    });
  };



  render() {
    return (
      <div className="App">
        <div>
          <InputBox 
            onChange={(event) => this._onChange(event.target.value)}
            input = {this.state.input}
          />
        </div>
        <div>
          <OutputBox 
            input = {this.state.input}
          />
        </div>
        <div>
        <OutputBox 
          upper = {this.state.upper}
        />
        </div>
        <div>
        <OutputBox 
          leet = {this.state.leet}
        />
        </div>
      </div>
    );
  }
}

export default App;
