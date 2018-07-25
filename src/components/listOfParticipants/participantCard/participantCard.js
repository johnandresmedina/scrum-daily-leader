import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './participantCard.css';
import isNil from 'lodash/isNil';

class ParticipantCard extends Component {

    render() {
        const { name, description, active } = this.props;
        const classDiv = active ? 'card participant-card-active' : 'card';
        const classCircle = active ? 'circle-active' : 'circle';
        const fistLetter = isNil(name) ? null : name.substring(0, 1);

        return (
            <div className="participant-card">
                <div className={classDiv}>

                    <div className="card-body">
                        <div className="row" >
                            <div className="participant-card-container-circle">
                                <div className={classCircle}>{fistLetter}</div>
                            </div>
                            <div className="col-md-8">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text participant-card-text">{description}</p>
                            </div>
                        </div>
                    </div>
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