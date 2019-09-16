import './uploadFile.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';

const UploadFile = ({ onFileChange, onFileUpload }) => {
    return (
        <div className='upload-file'>
            <input
                className='form-control upload-file__input'
                type='file'
                placeholder='Load your file'
                onChange={onFileChange}
            />
            <Button variant='contained' color='primary' onClick={onFileUpload}>
                <label className='upload-file__icon-label'>
                    <FormattedMessage id='upload' />
                </label>
                <CloudUpload />
            </Button>
        </div>
    );
};

UploadFile.propTypes = {
    onFileChange: PropTypes.func.isRequired,
    onFileUpload: PropTypes.func.isRequired,
};

export default UploadFile;
