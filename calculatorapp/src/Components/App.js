import React, {Component} from 'react';
import '../styles/App.css';
import Result from './Result';
import Keypad from './Keypad';
import Calculator from './Calculator';

class App extends Component{
  
  render(){
    return (
      <main className="app">
        <Calculator />
      </main>
    );
  }
}

export default App;
