import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setRandomParticipant, removeParticipant, fileUpload } from '../../actions/participants';

//Components
import App from '../components/app';

class Root extends Component {
    onClickRouletteButton = () => {
        this.props.setRandomParticipant();
    };

    render() {
        const { participants, selectedParticipant, removeParticipant, fileUpload } = this.props;

        return (
            <App
                fileUpload={fileUpload}
                participants={participants}
                onClickRouletteButton={this.onClickRouletteButton}
                removeParticipant={removeParticipant}
                selectedParticipant={selectedParticipant}
            />
        );
    }
}

Root.propTypes = {
    fileUpload: PropTypes.func.isRequired,
    participants: PropTypes.array,
    removeParticipant: PropTypes.func.isRequired,
    selectedParticipant: PropTypes.object,
    setRandomParticipant: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        participants: state.participantsState.participants,
        selectedParticipant: state.participantsState.selectedParticipant,
    }),
    {
        fileUpload,
        removeParticipant,
        setRandomParticipant,
    },
)(Root);
