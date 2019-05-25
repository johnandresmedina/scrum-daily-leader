import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './uploadFile.scss';

//material-components
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';

class UploadFile extends Component {
    constructor(props) {
        super(props);

        this.state = { file: null };
    }

    onFileChange = e => {
        const file = !!e.target.files && e.target.files[0];
        this.setState({ file });
    };

    onFileUpload = e => {
        this.props.onFileUpload(this.state.file);
    };

    render() {
        return (
            <div className='search-component'>
                <input
                    className='form-control upload-file__input'
                    type='file'
                    placeholder='Load your file'
                    onChange={this.onFileChange}
                />
                <Button variant='contained' color='primary' onClick={this.onFileUpload}>
                    <label className='upload-file__icon-label'>Upload</label>
                    <CloudUpload />
                </Button>
            </div>
        );
    }
}

UploadFile.propTypes = {
    onFileUpload: PropTypes.func.isRequired,
};

export default UploadFile;
