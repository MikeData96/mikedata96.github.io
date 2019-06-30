import React, {Component} from 'react';
import './App.css';

import Heading from './Heading'
import Counter from './Counter'

class App extends Component {


render() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title="React counter z propa" class="mainHeading" />
        <Heading title="React counter jeszcze raz" class="secondaryHeading" />
      </header>

      <Counter initValue={33} />
      <Counter initValue={105} />
    </div>
  );
}
}

export default App;
