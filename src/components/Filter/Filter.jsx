import React, { Component } from 'react'
import css from './Filter.module.css'

export default class Filter extends Component {
    render() {
        const { updateFilterState, filter } = this.props;
        return (
            <>
            <p className={css.label}>Find contacts by name</p>
            <input
                type="text"
                value={filter}
                className={css.filterInput}
                onChange={e => updateFilterState(e.target.value)}
            />
            </>
        )
    }
}
