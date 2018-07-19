import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import random from 'lodash/random';

//Components
import SearchComponent from './searchComponent/searchComponent';
import ListOfParticipants from './listOfParticipants/listOfParticipants';

//Constants
import { listOfParticipants } from '../constants/globalConstants';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueSeleted: null
    };

    this.onClickRouletteButton = this.onClickRouletteButton.bind(this);
  }

  onClickRouletteButton() {
    const valueRandom = random(0, listOfParticipants.length - 1);
    this.setState({
      valueSeleted: listOfParticipants[valueRandom].name
    });
  }

  render() {
    const { valueSeleted } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to loans roulette</h1>
        </header>
        <div className="row" >
          <div className="col-md-3 App-first-container">

          </div>
          <div className="col-md-6 App-middle-container">
            <SearchComponent onHandleModifyValue={this.onClickRouletteButton} />
            <ListOfParticipants listParticipants={listOfParticipants} valueSeleted={valueSeleted} />
          </div>
          <div className="col-md-3 App-last-container">

          </div>
        </div>
        <p className="App-intro">
          Powered by Alejandro Saldarriaga, Andres Ochoa, John Medina y último pero no menos importante Wilfer Salazar
        </p>
      </div>
    );
  }
}

export default App;
