import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fileUpload } from '../../actions/participants';

import UploadFile from '../components/uploadFile';

class UploadFileContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { file: null };
    }

    onFileChange = e => {
        const file = !!e.target.files && e.target.files[0];
        this.setState({ file });
    };

    onFileUpload = () => {
        this.props.fileUpload(this.state.file);
    };

    render() {
        return <UploadFile onFileChange={this.onFileChange} onFileUpload={this.onFileUpload} />;
    }
}

UploadFileContainer.propTypes = {
    fileUpload: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        fileUpload,
    },
)(UploadFileContainer);
