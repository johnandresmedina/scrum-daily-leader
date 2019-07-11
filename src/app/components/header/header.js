import './header.scss';
import logo from '../../../assets/logo.svg';

import React from 'react';
import { FormattedMessage } from 'react-intl';

const header = () => {
    return (
        <header className='header'>
            <img src={logo} className='header__logo' alt='logo' />
            <h1 className='header__title'>
                <FormattedMessage id='header-title' />
            </h1>
        </header>
    );
};

export default header;
