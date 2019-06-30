import React, { Component } from 'react';
import './App.css';


import ButtonsPanel from './ButtonsPanel';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counterValue: this.props.initValue
    }
  }


  changeNumber = () => {
    console.log('dodaj 1');
    this.setState(prevState=>{
      return({counterValue: prevState.counterValue + 1});
  });
}

resetCounter = (reset) => {
    if(reset === true) {
      this.setState({counterValue: 0});
    } else {
      this.setState({counterValue: this.props.initValue});
    }
} 

  render() {
    console.log(this);
    return (
      <div className="counter">
        To jest licznik: {this.state.counterValue}
        <ButtonsPanel
         changeCounterValue={this.changeNumber}
         resetCounterValue={this.resetCounter} />
      </div>
    );
  }
}

export default Counter;
