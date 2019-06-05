import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadParticipants } from '../actions';

//Components
import LoadList from '../components/loadList';

class LoadListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        };
    }

    updateInputValue = evt => {
        this.setState({
            inputValue: evt.target.value,
        });
    };

    render() {
        const { inputValue } = this.state;
        const { loadParticipants } = this.props;

        return (
            <LoadList
                inputValue={inputValue}
                onLoad={loadParticipants}
                updateInputValue={this.updateInputValue}
            />
        );
    }
}

LoadListContainer.propTypes = {
    loadParticipants: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        loadParticipants,
    },
)(LoadListContainer);
