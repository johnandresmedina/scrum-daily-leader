import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fileUpload } from '../../participants/actions';

import UploadFile from '../components/uploadFile';

const UploadFileContainer = ({ fileUpload }) => {
    const [file, setFile] = useState(null);

    const onFileChange = e => {
        const file = !!e.target.files && e.target.files[0];
        setFile(file);
        e.target.value = '';
    };

    const onFileUpload = () => {
        fileUpload(file);
    };

    return <UploadFile onFileChange={onFileChange} onFileUpload={onFileUpload} />;
};

UploadFileContainer.propTypes = {
    fileUpload: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        fileUpload,
    },
)(UploadFileContainer);
