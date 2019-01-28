import './listOfParticipants.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import isEqual from 'lodash/isEqual';
import get from 'lodash/get';

//Components
import ParticipantCard from './participantCard/participantCard';

class ListOfParticipants extends Component {

    mapEachParticipant = (participant, index) => {
        const { valueSeleted } = this.props;
        const active = isEqual(valueSeleted, participant.name);

        return (
            <div key={`participant-${index}`} className="col-md-3">
                <ParticipantCard
                    identification={index}
                    name={participant.name}
                    description={get(participant, 'description', 'An awesome member!')}
                    active={active}
                />
            </div>
        );
    }

    render() {
        const { listOfParticipants } = this.props;
        return (
            <div className="list-of-participants">
                <div className="row">
                    {listOfParticipants.map((participant, key) => this.mapEachParticipant(participant, key))}
                </div>
            </div>
        );
    }
}

ListOfParticipants.propTypes = {
    valueSeleted: PropTypes.string,
    listOfParticipants: PropTypes.array.isRequired
};

export default ListOfParticipants;
