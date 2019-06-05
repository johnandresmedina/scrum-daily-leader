import './index.scss';
import 'bootstrap/scss/bootstrap.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './app';
import configureStore from '../src/store/configureStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
