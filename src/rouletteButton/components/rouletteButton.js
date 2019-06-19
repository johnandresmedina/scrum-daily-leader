import './rouletteButton.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const RouletteButton = ({ setRandomParticipant }) => {
    return (
        <div className='roulette-button'>
            <Button variant='contained' color='primary' onClick={setRandomParticipant}>
                Roulette
                <AutorenewIcon />
            </Button>
        </div>
    );
};

RouletteButton.propTypes = {
    setRandomParticipant: PropTypes.func.isRequired,
};

export default RouletteButton;
