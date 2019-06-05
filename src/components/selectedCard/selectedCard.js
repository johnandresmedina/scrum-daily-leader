import './selectedCard.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import ParticipantCard from '../listOfParticipants/participantCard/participantCard';

//material-components
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class SelectedCard extends Component {
    render() {
        const { selectedParticipant, removeParticipant } = this.props;

        return (
            <div className='col-md-12 selected-card'>
                <div className='selected-card__participant'>
                    <ParticipantCard
                        name={selectedParticipant.name}
                        description={selectedParticipant.description}
                        active
                        participantSeleted
                    />
                </div>
                <div className='selected-card__remove-button-container'>
                    <Button
                        variant='contained'
                        color='secondary'
                        className='selected-card__remove-button'
                        aria-label='delete'
                        onClick={() => removeParticipant(selectedParticipant.index)}>
                        Remove
                        <DeleteIcon />
                    </Button>
                </div>
            </div>
        );
    }
}

SelectedCard.propTypes = {
    selectedParticipant: PropTypes.object.isRequired,
    removeParticipant: PropTypes.func.isRequired,
};

export default SelectedCard;
