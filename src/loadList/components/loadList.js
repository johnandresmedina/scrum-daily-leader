import './loadList.scss';

import React from 'react';
import PropTypes from 'prop-types';

//material-components
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';

const loadList = ({ inputValue, onLoad, updateInputValue }) => {
    return (
        <div className='load-list'>
            <input
                className='form-control load-list__input'
                type='input'
                value={inputValue}
                placeholder='Write persons separate by commas'
                onChange={updateInputValue}
            />
            <Button variant='contained' color='primary' onClick={() => onLoad(inputValue)}>
                <label className='load-list__icon-label'>Load</label>
                <CloudUpload />
            </Button>
        </div>
    );
};

loadList.propTypes = {
    inputValue: PropTypes.string.isRequired,
    onLoad: PropTypes.func.isRequired,
    updateInputValue: PropTypes.func.isRequired,
};

export default loadList;
