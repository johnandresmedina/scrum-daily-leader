import './App.scss';
import './App.override.scss';
import logo from '../assets/logo.svg';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import isEqual from 'lodash/isEqual';
import { connect } from 'react-redux';
import { getParticipantList, setRandomParticipant, removeParticipant } from '../actions/participants';

//Components
import SearchComponent from '../components/searchComponent/searchComponent';
import ListOfParticipants from '../components/listOfParticipants/listOfParticipants';
import ParticipantCard from '../components/listOfParticipants/participantCard/participantCard';

//material-components
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class App extends Component {

    componentDidMount() {
        this.props.getParticipantList();
    }

    onClickRouletteButton = () => {
        this.props.setRandomParticipant();
    }

    removeParticipant = (index) => {
        this.props.removeParticipant(index);
    }

    render() {
        const { listOfParticipants, selectedParticipant } = this.props;

        const nameSelectedParticipant = isEqual(selectedParticipant, null) ? null : selectedParticipant.name;

        return (
            <div className="app">
                <header className="app__header">
                    <img src={logo} className="app__logo" alt="logo" />
                    <h1 className="app__title">Welcome to loans roulette</h1>
                </header>
                <div className="row app__container-cols" >
                    <div className="col-md-12">
                        <SearchComponent onHandleModifyValue={this.onClickRouletteButton} />
                        {!isEqual(selectedParticipant, null) &&
                            <div className="col-md-12 app__container-participant">
                                <div className="app__participant">
                                    <ParticipantCard
                                        identification={selectedParticipant.index}
                                        name={selectedParticipant.name}
                                        description={selectedParticipant.description}
                                        active
                                        participantSeleted
                                    />
                                </div>
                                <div className="app__container-remove-button">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="app__remove-button"
                                        aria-label="delete"
                                        onClick={() => this.removeParticipant(selectedParticipant.index)}>
                                        Remove
                                        <DeleteIcon />
                                    </Button>
                                </div>
                            </div>
                        }
                        {listOfParticipants &&
                            <ListOfParticipants
                                listOfParticipants={listOfParticipants}
                                valueSeleted={nameSelectedParticipant} />}
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    getParticipantList: PropTypes.func.isRequired,
    setRandomParticipant: PropTypes.func.isRequired,
    removeParticipant: PropTypes.func.isRequired,
    listOfParticipants: PropTypes.array.isRequired,
    selectedParticipant: PropTypes.object
};

App.defaultProps = {
    selectedParticipant: null
};

export default connect(
    state => ({
        listOfParticipants: state.participants.listOfParticipants,
        selectedParticipant: state.participants.selectedParticipant
    }),
    dispatch => ({
        getParticipantList: () => dispatch(getParticipantList()),
        setRandomParticipant: () => dispatch(setRandomParticipant()),
        removeParticipant: (index) => dispatch(removeParticipant(index))
    }))(App);
