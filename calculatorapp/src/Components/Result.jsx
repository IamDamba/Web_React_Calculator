import React, {Component} from 'react';
import styles from '../styles/result.module.css';

class Result extends Component{
    render(){
        return(
            <div className={styles.result}>
                <p>{this.props.result}</p>
            </div>
        );
    }
}

export default Result;