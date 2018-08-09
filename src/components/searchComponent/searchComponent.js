import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './searchComponent.scss';

class SearchComponent extends Component {

    render() {
        const { onHandleModifyValue } = this.props;
        return (
            <div className="search-component">
                <input className="form-control" type="text" placeholder="Ingrese un criterio de busqueda" />
                <button type="button" className="btn btn-link" onClick={onHandleModifyValue}>Roulette</button>
            </div>
        );
    }
}

SearchComponent.propTypes = {
    onHandleModifyValue: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default SearchComponent;