import actionTypes from '../constants/actionTypes';

const initialState = {
    fetching: false,
    listOfParticipants: [],
    selectedParticipant: null,
    error: null
};

const participantsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_SELECTED_PARTICIPANT:
            return {
                ...state,
                selectedParticipant: action.payload.selectedParticipant
            };
        case actionTypes.REMOVE_PARTICIPANT_LIST_SUCCESS:
            return {
                ...state,
                listOfParticipants: action.payload.listOfParticipants,
                selectedParticipant: null
            };
        case actionTypes.UPDATE_PARTICIPANT_LIST:
            return {
                ...state,
                listOfParticipants: action.payload.listOfParticipants,
                selectedParticipant: null
            };
        case actionTypes.UPDATE_PARTICIPANT_LIST_ERROR:
            return {
                ...state,
                error: action.payload.error,
                selectedParticipant: null
            };
        default:
            return state;
    }
};

export default participantsReducer;
