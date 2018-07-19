import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './searchComponent.css';

class SearchComponent extends Component {

    render() {
        const { onHandleModifyValue } = this.props;
        return (
            <div className="search-component">
                <input class="form-control" type="text" placeholder="Ingrese un criterio de busqueda" />
                <button type="button" class="btn btn-link" onClick={onHandleModifyValue}>Roulette</button>
            </div>
        );
    }
}

SearchComponent.prototypes = {
    onHandleModifyValue: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default SearchComponent;