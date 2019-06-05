import { actions } from '../actions/participants';
import { handleActions, combineActions } from 'redux-actions';

const initialState = {
    fetching: false,
    participants: [],
    selectedParticipant: null,
    error: null,
};

const participantsReducer = handleActions(
    {
        [actions.setSelectedParticipant]: (state, action) => ({
            ...state,
            selectedParticipant: action.payload.selectedParticipant,
        }),

        [combineActions(actions.removeParticipantListSuccess, actions.updateParticipantList)]: (
            state,
            action,
        ) => ({
            ...state,
            participants: action.payload.participants,
            selectedParticipant: null,
        }),

        [actions.updateParticipantListError]: (state, action) => ({
            ...state,
            error: action.payload.error,
            selectedParticipant: null,
        }),
    },
    initialState,
);

export default participantsReducer;
