import './participant.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Participant = ({ active, description, name, selected }) => {
    const containerClass = classnames({
        participant__selected: selected,
    });
    const circleClass = classnames('participant__circle', {
        ' participant__circle--active': active,
    });
    const firstLetter = name ? name.substring(0, 1) : null;

    return (
        <div className='participant'>
            <div className={containerClass}>
                <ExpansionPanel defaultExpanded={selected}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className='participant__container-circle'>
                            <div className={circleClass}>{firstLetter}</div>
                        </div>
                        <Typography className='participant__name'>{name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>{description}</Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    );
};

Participant.propTypes = {
    active: PropTypes.bool,
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
};

export default Participant;
