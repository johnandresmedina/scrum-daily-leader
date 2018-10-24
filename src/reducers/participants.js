import actionTypes from '../constants/actionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
    fetching: false,
    listOfParticipants: [],
    selectedParticipant: null,
    error: null
};

const participantsReducer = handleActions(
    {
        [actionTypes.SET_SELECTED_PARTICIPANT]: (state = initialState, action) => ({
            ...state,
            selectedParticipant: action.payload.selectedParticipant
        }),

        [actionTypes.REMOVE_PARTICIPANT_LIST_SUCCESS]: (state = initialState, action) => ({
            ...state,
            listOfParticipants: action.payload.listOfParticipants,
            selectedParticipant: null
        }),

        [actionTypes.UPDATE_PARTICIPANT_LIST]: (state = initialState, action) => ({
            ...state,
            listOfParticipants: action.payload.listOfParticipants,
            selectedParticipant: null
        }),

        [actionTypes.UPDATE_PARTICIPANT_LIST_ERROR]: (state = initialState, action) => ({
            ...state,
            error: action.payload.error,
            selectedParticipant: null
        })
    },
    { state: initialState }
);

export default participantsReducer;
