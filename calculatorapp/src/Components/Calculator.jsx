import React, { Component } from 'react'
import Result from './Result';
import Keypad from './Keypad';
import style from '../styles/calculator.module.css';

export default class Calculator extends Component {
    state = {
        result: ""
    };
  
    buttonPressed = e =>{
      try {
        if (e === "=") {
          this.calculate();
        }else if (e === "C") {
          this.reset();
        }else if (e === "del") {
          this.backspace();
        }else if (e === "+/-") {
          this.numberValue();
        }else
        this.setState({result: this.state.result + e});
      } catch (error) {
        console.log(error);
      }
    };
  
    calculate = ()=>
    {
      if (this.state.result.length === 0)
      {
        this.setState({
          result: ''
        });
      } 
      
      else
      {
        this.setState({
          result: eval(this.state.result)
        });
      }
    };
  
    reset= ()=>{
      this.setState({
        result: ''
      });
    };
  
    backspace= ()=>
    {
      if (this.state.result.length === 0)
      {
        this.setState({
          result: ''
        });
      } 
      
      else
      {
        this.setState({
          result: this.state.result.slice(0, -1)
        });
      }
    };
  
    numberValue= ()=>
    {
      if (parseFloat(this.state.result) > 0)
      {
        var n = "-";
        this.setState({
          result: n.concat(this.state.result)
        });
      } 
      
      else
      {
        this.setState({
          result: this.state.result.replace('-', '')
        });
      }
    };
    
    render(){
        return (
            <section className={style.calculator}>
                <Result result={this.state.result.length === 0 ? "0" : this.state.result}/>
                <Keypad buttonPressed={this.buttonPressed}/>
            </section>
        );
    }
}
