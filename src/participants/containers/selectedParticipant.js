import './selectedParticipant.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeParticipant } from '../../actions/participants';

import Participant from '../components/participant';

const SelectedParticipant = ({ selectedParticipant, removeParticipant }) => {
    return selectedParticipant ? (
        <div className='col-md-12 selected-participant'>
            <Participant
                active
                description={selectedParticipant.description}
                index={selectedParticipant.index}
                name={selectedParticipant.name}
                selected
                removeParticipant={removeParticipant}
            />
        </div>
    ) : null;
};

SelectedParticipant.propTypes = {
    selectedParticipant: PropTypes.object,
    removeParticipant: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        selectedParticipant: state.participantsState.selectedParticipant,
    }),
    {
        removeParticipant,
    },
)(SelectedParticipant);
