import './index.scss';
import 'bootstrap/scss/bootstrap.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from '../src/store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import Root from './app';

ReactDOM.render(<Root store={configureStore()} />, document.getElementById('root'));

registerServiceWorker();
