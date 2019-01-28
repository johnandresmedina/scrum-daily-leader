import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './loadList.scss';

//material-components
import Button from '@material-ui/core/Button';
import CloudUpload from '@material-ui/icons/CloudUpload';

class LoadList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        return (
            <div className="load-list">
                <input className="form-control load-list__input" type="input" placeholder="Write persons separate by commas"
                    onChange={evt => this.updateInputValue(evt)} />
                <Button variant="contained" color="primary" onClick={() => this.props.onLoad(this.state.inputValue)}>
                    <label className="load-list__icon-label">Load</label>
                    <CloudUpload />
                </Button>
            </div>
        );
    }
}

LoadList.propTypes = {
    onLoad: PropTypes.func.isRequired
};

export default LoadList;
