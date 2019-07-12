import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import DevTools from './devTools';
import App from '../components/app';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <div>
                <App />
                <DevTools />
            </div>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default hot(Root);
