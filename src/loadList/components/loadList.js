import './loadList.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

//material-components
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';

const loadList = ({ inputValue, intl, onLoad, updateInputValue }) => {
    return (
        <div className='load-list'>
            <input
                className='form-control load-list__input'
                type='input'
                value={inputValue}
                placeholder={intl.formatMessage({ id: 'load-list-placeholder' })}
                onChange={updateInputValue}
            />
            <Button variant='contained' color='primary' onClick={() => onLoad(inputValue)}>
                <label className='load-list__icon-label'>
                    <FormattedMessage id='load' />
                </label>
                <CloudUpload />
            </Button>
        </div>
    );
};

loadList.propTypes = {
    inputValue: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired,
    updateInputValue: PropTypes.func.isRequired,
};

export default injectIntl(loadList);
