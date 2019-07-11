import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import DevTools from './devTools';
import { addLocaleData, getLanguageConfig } from '../../i18n/';
import App from '../components/app';

addLocaleData();

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <div>
                <IntlProvider {...getLanguageConfig()}>
                    <App />
                </IntlProvider>
                <DevTools />
            </div>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default hot(Root);
