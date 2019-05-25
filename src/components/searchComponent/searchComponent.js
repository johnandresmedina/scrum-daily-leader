import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './searchComponent.scss';

//material-components
import Button from '@material-ui/core/Button';
import AutorenewIcon from '@material-ui/icons/Autorenew';

class SearchComponent extends Component {
    render() {
        const { onHandleModifyValue } = this.props;
        return (
            <div className='search-component'>
                <Button variant='contained' color='primary' onClick={onHandleModifyValue}>
                    Roulette
                    <AutorenewIcon />
                </Button>
            </div>
        );
    }
}

SearchComponent.propTypes = {
    onHandleModifyValue: PropTypes.func.isRequired,
};

export default SearchComponent;
