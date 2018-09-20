import './App.scss';
import './App.override.scss';
import logo from '../assets/logo.svg';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import isEqual from 'lodash/isEqual';
import { connect } from 'react-redux';
import { setRandomParticipant, removeParticipant, fileUpload } from '../actions/participants';

//Components
import SearchComponent from '../components/searchComponent/searchComponent';
import ListOfParticipants from '../components/listOfParticipants/listOfParticipants';
import SelectedCard from '../components/selectedCard/selectedCard';
import UploadFile from '../components/uploadFile/uploadFile';

class App extends Component {
    onClickRouletteButton = () => {
        this.props.setRandomParticipant();
    }

    render() {
        const { listOfParticipants, selectedParticipant, removeParticipant, fileUpload } = this.props;

        const nameSelectedParticipant = isEqual(selectedParticipant, null) ? null : selectedParticipant.name;

        return (
            <div className="app">
                <header className="app__header">
                    <img src={logo} className="app__logo" alt="logo" />
                    <h1 className="app__title">Welcome to loans roulette</h1>
                </header>
                <div className="row app__container-cols" >
                    <div className="col-md-12">
                        <UploadFile onFileUpload={fileUpload} />
                        <SearchComponent onHandleModifyValue={this.onClickRouletteButton} />
                        {!isEqual(selectedParticipant, null) &&
                            <SelectedCard
                                selectedParticipant={selectedParticipant}
                                removeParticipant={removeParticipant}
                            />
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
    fileUpload: PropTypes.func.isRequired,
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
        fileUpload: (file) => dispatch(fileUpload(file)),
        setRandomParticipant: () => dispatch(setRandomParticipant()),
        removeParticipant: (index) => dispatch(removeParticipant(index))
    }))(App);
