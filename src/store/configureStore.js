import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer } from '../app';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const middleware = [thunk, reduxImmutableStateInvariant(), logger];

    const initialState = loadState();

    const store = createStore(
        rootReducer,
        initialState ? { participantsState: { ...initialState } } : initialState,
        applyMiddleware(...middleware),
    );

    store.subscribe(() => {
        saveState({
            participants: store.getState().participantsState.participants,
        });
    });

    return store;
};

export default configureStore;
