import actionTypes from '../constants/actionTypes';
import random from 'lodash/random';

const setSelectedParticipant = selectedParticipant => ({
    type: actionTypes.SET_SELECTED_PARTICIPANT,
    payload: { selectedParticipant }
});

const setRandomParticipant = () => (dispatch, getState) => {

    const participantList = getState().participants.listOfParticipants;
    const selectedParticipant = participantList[random(0, participantList.length - 1)];

    dispatch(setSelectedParticipant(selectedParticipant));
};

const removeParticipantSuccess = listOfParticipants => ({
    type: actionTypes.REMOVE_PARTICIPANT_LIST_SUCCESS,
    payload: { listOfParticipants }
});

const removeParticipant = index => (dispatch, getState) => {

    const participantList = getState().participants.listOfParticipants;
    const newParticipantList = participantList.filter(participant => participant.index !== index);

    dispatch(removeParticipantSuccess(newParticipantList));
};

const updateParticipantList = listOfParticipants => ({
    type: actionTypes.UPDATE_PARTICIPANT_LIST,
    payload: { listOfParticipants }
});

const updateParticipantListError = error => ({
    type: actionTypes.UPDATE_PARTICIPANT_LIST,
    payload: { error }
});

const fileUpload = file => dispatch => {

    if (file) {
        const reader = new FileReader();

        reader.onload = event => {
            try {
                const result = JSON.parse(event.target.result);
                dispatch(updateParticipantList(result));
            } catch (ex) {
                dispatch(updateParticipantListError(ex));
            }
        };

        reader.readAsText(file);
    }
};

export { setRandomParticipant, removeParticipant, fileUpload };
