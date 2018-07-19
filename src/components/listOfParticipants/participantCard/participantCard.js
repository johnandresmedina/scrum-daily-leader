import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './participantCard.scss';
import isNil from 'lodash/isNil';
import classnames from 'classnames';
class ParticipantCard extends Component {

    render() {
        const { name, description, active } = this.props;
        const classDiv = classnames('row', 'participant-card', {
            ' participant-card__active': active
        });
        const classCircle = classnames('participant-card__circle', {
            ' participant-card__circle--active': active
        });
        const fistLetter = isNil(name) ? null : name.substring(0, 1);

        return (
            <div className={classDiv}>
                <div className="participant-card__container-circle">
                    <div className={classCircle}>{fistLetter}</div>
                </div>
                <div className="col-md-8">
                    <h5 className="participant-card__card-title">{name}</h5>
                    <p className="participant-card__card-text">{description}</p>
                </div>
            </div>
        );
    }
}

ParticipantCard.prototypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    active: PropTypes.bool
}

export default ParticipantCard;