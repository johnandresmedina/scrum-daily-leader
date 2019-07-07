import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadParticipants } from '../actions';

import LoadList from '../components/loadList';

const LoadListContainer = ({ loadParticipants }) => {
    const [input, setInput] = useState('');

    const updateInputValue = evt => {
        setInput(evt.target.value);
    };

    return (
        <LoadList
            inputValue={input}
            onLoad={loadParticipants}
            updateInputValue={updateInputValue}
        />
    );
};

LoadListContainer.propTypes = {
    loadParticipants: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        loadParticipants,
    },
)(LoadListContainer);
