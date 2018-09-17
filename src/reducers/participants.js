import actionTypes from '../constants/actionTypes';

const initialState = {
    fetching: false,
    listOfParticipants: [],
    selectedParticipant: null
};

const participantsReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_PARTICIPANT_LIST:
            return {
                ...state,
                fetching: true
            };
        case actionTypes.GET_PARTICIPANT_LIST_SUCCESS:
            return {
                ...state,
                fetching: false,
                listOfParticipants: action.payload.listOfParticipants
            };
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
        default:
            return state;
    }
};

export default participantsReducer;
