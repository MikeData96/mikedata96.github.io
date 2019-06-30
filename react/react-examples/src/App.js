import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import H2 from './H2';
import Paragraph from './Paragraph';
import Input from './Input';

class App extends Component {


  constructor() {
    super();
    this.state = {
      paragraphText: 'To jest tekst ze stanu - test'
    }
  }

  setParagraphText = (event) => {
    this.setState({paragraphTeext: event,target,value});
  }

  render() {
    return (
    <div className="App">
      <H2 title ="Mój nagłówek w h2 w ReactJs" />
      <Paragraph text={this.state.paragrapText}/>
      <Input setText={this.setParagraphText}/>
      </div>
  );
}
 
}
export default App;
