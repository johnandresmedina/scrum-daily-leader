import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.scss';
import random from 'lodash/random';
import isEqual from 'lodash/isEqual';
import remove from 'lodash/remove';

//Components
import SearchComponent from '../components/searchComponent/searchComponent';
import ListOfParticipants from '../components/listOfParticipants/listOfParticipants';
import ParticipantCard from '../components/listOfParticipants/participantCard/participantCard';

//Constants
import { listOfParticipants } from '../constants/index';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      listOfParticipantsAvailable: JSON.parse(localStorage.getItem('listOfParticipants')),
      participantSelected: null
    };
  }

  removeFromState = (identification) => {
    const { listOfParticipantsAvailable } = this.state;

    remove(listOfParticipantsAvailable, participant => {
      return isEqual(participant.index, identification);
    });

    localStorage.setItem('listOfParticipants', JSON.stringify(listOfParticipantsAvailable));
    this.setState({ listOfParticipantsAvailable });
  }

  componentWillMount() {
    if (isEqual(localStorage.getItem('listOfParticipants'), 'null') ||
      isEqual(localStorage.getItem('listOfParticipants'), '[]')) {
      localStorage.setItem('listOfParticipants', JSON.stringify(listOfParticipants));
    }
  }

  onClickRouletteButton = () => {
    const list = JSON.parse(localStorage.getItem('listOfParticipants'));
    const valueRandom = random(0, list.length - 1);
    const participantSelected = list[valueRandom];
    this.removeFromState(list[valueRandom].index);
    this.setState({ participantSelected });
  }

  render() {
    const { participantSelected, listOfParticipantsAvailable } = this.state;
    const nameParticipantSeleted = isEqual(participantSelected, null) ? null : participantSelected.name;
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Welcome to loans roulette</h1>
        </header>
        <div className="row app__container-cols" >
          <div className="col-md-12">
            <SearchComponent onHandleModifyValue={this.onClickRouletteButton} />
            {!isEqual(participantSelected, null) &&
              <div className="col-md-12 app__container-participant">
                <div className="col-md-3 app__participant">
                  <ParticipantCard
                    identification={participantSelected.index}
                    name={participantSelected.name}
                    description={participantSelected.description}
                    active
                    removeFromState={participantSelected}
                  />
                </div>
              </div>
            }
            <ListOfParticipants
              listParticipants={listOfParticipantsAvailable}
              removeFromState={this.removeFromState}
              valueSeleted={nameParticipantSeleted} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
