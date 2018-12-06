import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';
import OutputBox from './OutputBox';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      tranformation: ""
    }
  }

  _onChange = (e) => {
    
    this.setState({
        input: e, 
    });
  };

  _updateText = (newText) => {
    console.log(this);
    this.setState({
        input: newText
    });
}


  render() {
    return (
      <div className="App">
        <div className="inputBox">
          <InputBox 
            // changeHandler={this._updateText}
            input = {this.state.input}
            changeHandler = {this._updateText}
            // changeHandler = {(event) => this._onChange(event.target.value)}
      />
        </div>
        <div className="output leet">
          <OutputBox 
            input = {this.state.input}       
          />
        </div>
        <div className="output upper">
          <OutputBox 
              input = {this.state.input}
              transformation = 'upper'

          />
        </div>
        <div className="output leet">
          <OutputBox 
              input = {this.state.input}
              transformation = 'leet'

          />
        </div>
        <div className="output upperLeet">
          <OutputBox  
              input = {this.state.input}
              transformation = 'upperLeet'

          />
        </div>
      </div>
    );
  }
}

export default App;
