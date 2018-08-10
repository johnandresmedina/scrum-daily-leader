import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './participantCard.scss';
import isNil from 'lodash/isNil';
import classnames from 'classnames';

class ParticipantCard extends Component {

    constructor(props) {
        super(props);

        this.onHandleRemoveParticipant = this.onHandleRemoveParticipant.bind(this);
    }

    onHandleRemoveParticipant() {
        const { identification, removeFromState } = this.props;
        removeFromState(identification);
    }

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
                <div className="col-md-8 participant-card__container-text">
                    <h5 className="participant-card__card-title">{name}</h5>
                    <p className="participant-card__card-text">{description}</p>
                </div>
                {!active &&
                    < button type="button" className="btn btn-link participant-card__button-remove" onClick={this.onHandleRemoveParticipant}>Remove</button>
                }
            </div>
        );
    }
}

ParticipantCard.propTypes = {
    identification: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    active: PropTypes.bool,
    removeFromState: PropTypes.func.isRequired
};

export default ParticipantCard;