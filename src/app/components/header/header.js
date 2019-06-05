import './header.scss';
import logo from '../../../assets/logo.svg';

import React from 'react';

const header = () => {
    return (
        <header className='header'>
            <img src={logo} className='header__logo' alt='logo' />
            <h1 className='header__title'>Choose your scrum daily leader!</h1>
        </header>
    );
};

export default header;
