import { actions } from '../participants/actions';

const loadParticipants = inputValues => dispatch => {
    const participants = [];

    if (inputValues) {
        inputValues.split(',').map(participant => participants.push({ name: participant.trim() }));
        dispatch(actions.updateParticipantList({ participants }));
    }
};

export { loadParticipants };
