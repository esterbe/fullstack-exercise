import React              from 'react';
import autoBind           from 'auto-bind-es5';
import './filter.css';

class Filter extends React.Component {
    constructor() {
        super();
        autoBind(this);

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
            this.props.onFilterClear();
        }

        this.setState({
            inFilterMode: !this.state.inFilterMode
        });
    }

    render() {
        let filterIcon = this.state.inFilterMode ? "filter-button clear-filter" : "filter-button start-filter";

        return (
            <form className="filter-form" ref="filterForm" onSubmit={this._onFilterSubmit}>
                <input ref="filterBox" className="filter-box"
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
