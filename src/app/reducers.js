import { combineReducers } from 'redux';
import participants from '../participants/reducer';

export const rootReducer = combineReducers({
    participantsState: participants,
});
