import actionTypes from '../constants/actionTypes';
import { listOfParticipants } from '../constants';
import random from 'lodash/random';

const fetchParticipantList = () => ({
    type: actionTypes.FETCH_PARTICIPANT_LIST
});

const getParticipantListSuccess = (listOfParticipants) => ({
    type: actionTypes.GET_PARTICIPANT_LIST_SUCCESS,
    payload: { listOfParticipants }
});

const getParticipantList = () => (dispatch, getState) => {

    if (getState().participants.listOfParticipants.length <= 0) {
        dispatch(fetchParticipantList());
        dispatch(getParticipantListSuccess(listOfParticipants));
    }
};

const setSelectedParticipant = (selectedParticipant) => ({
    type: actionTypes.SET_SELECTED_PARTICIPANT,
    payload: { selectedParticipant }
});

const setRandomParticipant = () => (dispatch, getState) => {

    const participantList = getState().participants.listOfParticipants;
    const selectedParticipant = participantList[random(0, participantList.length - 1)];

    dispatch(setSelectedParticipant(selectedParticipant));
};

const removeParticipantSuccess = (listOfParticipants) => ({
    type: actionTypes.REMOVE_PARTICIPANT_LIST_SUCCESS,
    payload: { listOfParticipants }
});

const removeParticipant = (index) => (dispatch, getState) => {

    const participantList = getState().participants.listOfParticipants;
    const newParticipantList = participantList.filter(participant => participant.index !== index);

    dispatch(removeParticipantSuccess(newParticipantList));
};

export { getParticipantList, setRandomParticipant, removeParticipant };
