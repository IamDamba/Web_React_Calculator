import React, {Component} from 'react';
import style from '../styles/keypad.module.css';

class Keypad extends Component{

    buttonPressed = e =>{
         this.props.buttonPressed(e.target.name);
    };

    render(){
        return(
            <div className={style.keypad}>
                <div className={style.row}>
                    <button name='C' onClick={this.buttonPressed}>C</button>
                    <button name='+/-' onClick={this.buttonPressed}>+/-</button>
                    <button name='%' onClick={this.buttonPressed}>%</button>
                    <button name='/' onClick={this.buttonPressed}>/</button>
                </div>
                <div className={style.row}>
                    <button name='7' onClick={this.buttonPressed}>7</button>
                    <button name='8' onClick={this.buttonPressed}>8</button>
                    <button name='9' onClick={this.buttonPressed}>9</button>
                    <button name='*' onClick={this.buttonPressed}>X</button>
                </div>
                <div className={style.row}>
                    <button name='4' onClick={this.buttonPressed}>4</button>
                    <button name='5' onClick={this.buttonPressed}>5</button>
                    <button name='6' onClick={this.buttonPressed}>6</button>
                    <button name='-' onClick={this.buttonPressed}>-</button>
                </div>
                <div className={style.row}>
                    <button name='1' onClick={this.buttonPressed}>1</button>
                    <button name='2' onClick={this.buttonPressed}>2</button>
                    <button name='3' onClick={this.buttonPressed}>3</button>
                    <button name='+' onClick={this.buttonPressed}>+</button>
                </div>
                <div className={style.row}>
                    <button name='0' onClick={this.buttonPressed}>0</button>
                    <button name='.' onClick={this.buttonPressed}>.</button>
                    <button name='del' onClick={this.buttonPressed}>del</button>
                    <button className={style.equalbutton} name='=' onClick={this.buttonPressed}>=</button>
                </div>
            </div>
        );
    }
}

export default Keypad;