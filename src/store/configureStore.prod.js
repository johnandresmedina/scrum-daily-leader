import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import { rootReducer } from '../app';
import { loadState, saveState } from './localStorage';

const middleware = [thunk, reduxImmutableStateInvariant()];

const enhancer = applyMiddleware(...middleware);

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
