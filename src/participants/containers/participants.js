import './participants.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';

import { removeParticipant } from '../actions';

import Participant from '../components/participant';

const Participants = ({ participants, selectedParticipant, removeParticipant }) => {
    const getParticipantsCard = () => {
        const currentName = selectedParticipant ? selectedParticipant.name : null;

        return participants.map((participant, index) => {
            const name = participant.name;
            const active = isEqual(currentName, name);

            return (
                <div key={`participant-${index}`} className='col-md-3'>
                    <Participant
                        active={active}
                        description={get(participant, 'description', 'An awesome member!')}
                        index={index}
                        name={name}
                        removeParticipant={removeParticipant}
                    />
                </div>
            );
        });
    };

    return (
        <div className='participants'>
            <div className='row'>{getParticipantsCard()}</div>
        </div>
    );
};

Participants.propTypes = {
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
)(Participants);
