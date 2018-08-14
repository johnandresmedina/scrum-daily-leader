import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './participantCard.scss';
import isNil from 'lodash/isNil';
import classnames from 'classnames';

//material-components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ParticipantCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { name, description, active, participantSeleted } = this.props;
        const classDivContainer = classnames({
            'participant-card__container-inline': participantSeleted
        });
        const classCircle = classnames('participant-card__circle', {
            ' participant-card__circle--active': active
        });
        const fistLetter = isNil(name) ? null : name.substring(0, 1);

        return (
            <div className="participant-card">
                <div className={classDivContainer}>
                    <ExpansionPanel defaultExpanded={participantSeleted}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div className="participant-card__container-circle">
                                <div className={classCircle}>{fistLetter}</div>
                            </div>
                            <Typography className="participant-card__name">{name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {description}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    }
}

ParticipantCard.propTypes = {
    identification: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    active: PropTypes.bool,
    participantSeleted: PropTypes.bool
};

export default ParticipantCard;