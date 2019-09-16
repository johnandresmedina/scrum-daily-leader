import './participant.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from '../../card';

const Participant = ({ active, description, index, name, selected, removeParticipant }) => {
    const containerClass = classnames({
        participant__selected: selected,
    });

    const handleDeleteClick = () => {
        removeParticipant(index);
    };

    return (
        <div className='participant'>
            <div className={containerClass}>
                <Card
                    active={active}
                    description={description}
                    title={name}
                    handleDeleteClick={handleDeleteClick}
                />
            </div>
        </div>
    );
};

Participant.propTypes = {
    active: PropTypes.bool,
    description: PropTypes.string,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    removeParticipant: PropTypes.func.isRequired,
};

export default Participant;
