import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/scss/bootstrap.scss';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
