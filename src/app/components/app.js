import './app.scss';

import React from 'react';
import { FormattedMessage } from 'react-intl';

import injectIntlProvider from '../../i18n/injectIntlProvider';
import Header from './header/header';
import LoadList from '../../loadList';
import UploadFile from '../../uploadFile';
import RouletteButton from '../../rouletteButton';
import Participants, { SelectedParticipant } from '../../participants';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <div className='row app__container'>
                <div className='col-md-5'>
                    <LoadList />
                </div>
                <div className='col-md-2 app__or'>
                    <FormattedMessage id='or-separator' />
                </div>
                <div className='col-md-5'>
                    <UploadFile />
                </div>
                <div className='col-md-12'>
                    <RouletteButton />
                    <SelectedParticipant />
                    <Participants />
                </div>
            </div>
        </div>
    );
};

export default injectIntlProvider(App);
