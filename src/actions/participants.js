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
    const participantList = getState().participants.listOfParticipants;
    const index = random(0, participantList.length - 1);
    const selectedParticipant = { ...participantList[index], index };

    dispatch(actions.setSelectedParticipant({ selectedParticipant }));
};

const removeParticipant = index => (dispatch, getState) => {
    const listOfParticipants = getState().participants.listOfParticipants.slice();

    if (index === 0) {
        listOfParticipants.shift();
    } else {
        listOfParticipants.splice(index, 1);
    }

    dispatch(actions.removeParticipantListSuccess({ listOfParticipants }));
};

const fileUpload = file => dispatch => {
    if (file) {
        const reader = new FileReader();

        reader.onload = event => {
            try {
                const listOfParticipants = JSON.parse(event.target.result);
                dispatch(actions.updateParticipantList({ listOfParticipants }));
            } catch (error) {
                dispatch(actions.updateParticipantListError({ error }));
            }
        };

        reader.readAsText(file);
    }
};

const loadList = list => dispatch => {
    const listOfParticipants = [];

    if (list !== '') {
        list.split(',').map(participant => listOfParticipants.push({ name: participant.trim() }));
        dispatch(actions.updateParticipantList({ listOfParticipants }));
    }
};

export { setRandomParticipant, removeParticipant, fileUpload, loadList, actions };
