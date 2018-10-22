import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import random from 'lodash/random';

const setSelectedParticipant = createAction(actionTypes.SET_SELECTED_PARTICIPANT);

const setRandomParticipant = () => (dispatch, getState) => {

    const participantList = getState().participants.listOfParticipants;
    const selectedParticipant = participantList[random(0, participantList.length - 1)];

    dispatch(setSelectedParticipant({selectedParticipant}));
};

const removeParticipantSuccess = createAction(actionTypes.REMOVE_PARTICIPANT_LIST_SUCCESS);

const removeParticipant = index => (dispatch, getState) => {

    const participantList = getState().participants.listOfParticipants;
    const listOfParticipants = participantList.filter(participant => participant.index !== index);

    dispatch(removeParticipantSuccess({listOfParticipants}));
};

const updateParticipantList = createAction(actionTypes.UPDATE_PARTICIPANT_LIST);
const updateParticipantListError = createAction(actionTypes.UPDATE_PARTICIPANT_LIST_ERROR);

const fileUpload = file => dispatch => {

    if (file) {
        const reader = new FileReader();

        reader.onload = event => {
            try {
                const listOfParticipants = JSON.parse(event.target.result);
                dispatch(updateParticipantList({listOfParticipants}));
            } catch (error) {
                dispatch(updateParticipantListError({error}));
            }
        };

        reader.readAsText(file);
    }
};

export { setRandomParticipant, removeParticipant, fileUpload };
