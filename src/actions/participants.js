import { createActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import random from 'lodash/random';

const actions = createActions(
    actionTypes.SET_SELECTED_PARTICIPANT,
    actionTypes.REMOVE_PARTICIPANT_LIST_SUCCESS,
    actionTypes.UPDATE_PARTICIPANT_LIST,
    actionTypes.UPDATE_PARTICIPANT_LIST_ERROR,
);

const setRandomParticipant = () => (dispatch, getState) => {
    const participants = getState().participantsState.participants;
    const index = random(0, participants.length - 1);
    const selectedParticipant = { ...participants[index], index };

    dispatch(actions.setSelectedParticipant({ selectedParticipant }));
};

const removeParticipant = index => (dispatch, getState) => {
    const participants = getState().participantsState.participants.slice();

    if (index === 0) {
        participants.shift();
    } else {
        participants.splice(index, 1);
    }

    dispatch(actions.removeParticipantListSuccess({ participants }));
};

const fileUpload = file => dispatch => {
    if (file) {
        const reader = new FileReader();

        reader.onload = event => {
            try {
                const participants = JSON.parse(event.target.result);
                dispatch(actions.updateParticipantList({ participants }));
            } catch (error) {
                dispatch(actions.updateParticipantListError({ error }));
            }
        };

        reader.readAsText(file);
    }
};

export { setRandomParticipant, removeParticipant, fileUpload, actions };
