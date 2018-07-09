import React              from 'react';
import './filter.scss';

class Filter extends React.Component {
    constructor() {
        super();

        this.state = {
            inFilterMode: false
        }
    }

    _onFilterSubmit(e)  {
        e.preventDefault();

        if(!this.state.inFilterMode) {
            if (!this.refs.filterBox || this.refs.filterBox.value === "") return;
            this.props.onFilterSubmit(this.refs.filterBox.value);
        }
        else {
            this.refs.filterBox.value = "";
            this.props.onFilterSubmit();
        }

        this.setState({
            inFilterMode: !this.state.inFilterMode
        });
    }

    render() {
        let filterIcon = this.state.inFilterMode ? "filter-button clear-filter" : "filter-button start-filter";

        return (
            <form className="filter-form" ref="filterForm" onSubmit={this._onFilterSubmit}>
                <input ref="filterBox"
                       type="text"
                       onFocus={this._textAreaFocus}
                       onBlur={this._textAreaBlur}
                       placeholder="Filter">
                </input>
                <input type="button" title="Filter" className={filterIcon} onClick={this._onFilterSubmit}></input>
            </form>
        );
    }
}

export default Filter;
