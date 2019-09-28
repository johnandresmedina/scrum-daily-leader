import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeParticipant } from '../actions';
import Participants from '../components/participants';

const ParticipantsContainer = ({ participants, selectedParticipant, removeParticipant }) => {
    return <Participants {...{ participants, selectedParticipant, removeParticipant }} />;
};

ParticipantsContainer.propTypes = {
    participants: PropTypes.array.isRequired,
    selectedParticipant: PropTypes.object,
    removeParticipant: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        participants: state.participantsState.participants,
        selectedParticipant: state.participantsState.selectedParticipant,
    }),
    { removeParticipant },
)(ParticipantsContainer);
