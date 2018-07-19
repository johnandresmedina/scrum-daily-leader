import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listOfParticipants.css';
import isEqual from 'lodash/isEqual';

class ListOfParticipants extends Component {

    constructor(props) {
        super(props);

        this.mapEachParticipant = this.mapEachParticipant.bind(this);
    }

    mapEachParticipant(participant, index) {
        const { valueSeleted } = this.props;
        const classLi = isEqual(valueSeleted, participant.name) ? "list-group-item active" : "list-group-item";

        return (
            <li class={classLi} key={index}>
                <div>
                    <span><b>Name: </b>{participant.name} </span>
                    <span><b>Nickname: </b>{participant.alias}</span>
                </div>
            </li>
        );
    }

    render() {
        const { listParticipants } = this.props;
        return (
            <div className="list-of-participants">
                <ul class="list-group">
                    {listParticipants.map((participant, key) => this.mapEachParticipant(participant, key))}
                </ul>
            </div>
        );
    }
}

ListOfParticipants.prototypes = {
    valueSeleted: PropTypes.string,
    listParticipants: PropTypes.object.isRequired
}

export default ListOfParticipants;