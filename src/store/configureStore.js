import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { rootReducer, DevTools } from '../app';
import { loadState, saveState } from './localStorage';

const middleware = [thunk, reduxImmutableStateInvariant(), logger];

const enhancer = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
);

const configureStore = () => {
    const initialState = loadState();

    const store = createStore(
        rootReducer,
        initialState ? { participantsState: { ...initialState } } : initialState,
        enhancer,
    );

    store.subscribe(() => {
        saveState({
            participants: store.getState().participantsState.participants,
        });
    });

    return store;
};

export default configureStore;
