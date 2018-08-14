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

//material-components
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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

  componentDidMount() {
    if (isEqual(localStorage.getItem('listOfParticipants'), null) ||
      isEqual(localStorage.getItem('listOfParticipants'), [])) {
      localStorage.setItem('listOfParticipants', JSON.stringify(listOfParticipants));
      this.setState({ listOfParticipantsAvailable: JSON.parse(localStorage.getItem('listOfParticipants')) });
    }
  }

  removeFromState = (identification) => {
    const { listOfParticipantsAvailable } = this.state;

    remove(listOfParticipantsAvailable, participant => {
      return isEqual(participant.index, identification);
    });

    localStorage.setItem('listOfParticipants', JSON.stringify(listOfParticipantsAvailable));
    this.setState({
      listOfParticipantsAvailable,
      participantSelected: null
    });
  }

  UNSAFE_componentWillMount() {
    if (isEqual(localStorage.getItem('listOfParticipants'), 'null') ||
      isEqual(localStorage.getItem('listOfParticipants'), '[]')) {
      localStorage.setItem('listOfParticipants', JSON.stringify(listOfParticipants));
    }
  }

  onClickRouletteButton = () => {
    const list = JSON.parse(localStorage.getItem('listOfParticipants'));
    const valueRandom = random(0, list.length - 1);
    const participantSelected = list[valueRandom];
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
                <div className="app__participant">
                  <ParticipantCard
                    identification={participantSelected.index}
                    name={participantSelected.name}
                    description={participantSelected.description}
                    active
                    removeFromState={participantSelected}
                    participantSeleted
                  />
                </div>
                <div className="app__container-remove-button">
                  <Button variant="contained" color="secondary" className="app__remove-button" aria-label="delete" onClick={() => this.removeFromState(participantSelected.index)}>
                    Remove
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            }
            {listOfParticipantsAvailable &&
              <ListOfParticipants
                listParticipants={listOfParticipantsAvailable}
                valueSeleted={nameParticipantSeleted} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
