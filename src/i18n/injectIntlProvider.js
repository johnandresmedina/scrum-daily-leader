import React from 'react';
import { IntlProvider } from 'react-intl';

import { addLocaleData, getLanguageConfig } from './helper';

addLocaleData();

const injectIntlProvider = WrappedComponent => {
    const Wrapper = () => (
        <IntlProvider {...getLanguageConfig()}>
            <WrappedComponent />
        </IntlProvider>
    );
    return Wrapper;
};

export default injectIntlProvider;
