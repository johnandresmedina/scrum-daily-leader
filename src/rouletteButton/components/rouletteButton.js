import './rouletteButton.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const RouletteButton = ({ setRandomParticipant }) => {
    return (
        <div className='roulette-button'>
            <Button variant='contained' color='primary' onClick={setRandomParticipant}>
                <FormattedMessage id='roulette' />
                <AutorenewIcon />
            </Button>
        </div>
    );
};

RouletteButton.propTypes = {
    setRandomParticipant: PropTypes.func.isRequired,
};

export default RouletteButton;
