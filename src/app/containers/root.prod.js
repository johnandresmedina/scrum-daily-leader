import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { addLocaleData, getLanguageConfig } from '../../i18n/';
import App from '../components/app';

addLocaleData();

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <IntlProvider {...getLanguageConfig()}>
                <App />
            </IntlProvider>
        </Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
