import React, {PropTypes, Component} from 'react';
import Table from 'react-toolbox/lib/table';
import DropDown from 'react-toolbox/lib/dropdown';
import classnames from 'classnames';
import {IconButton} from 'react-toolbox/lib/button';

import {
    SPAN_TEXT,
    ARROW_LEFT,
    ARROW_RIGHT
} from './constants.js';

class TableWithPagination extends Component{
    static propTypes = {
        className: PropTypes.string,
        limit: PropTypes.number,
        onSelect: PropTypes.func,
        selected: PropTypes.array,
        source: PropTypes.array,
        theme: PropTypes.object
    };
    constructor (props){
        super(props);
        this.state = {
            startIndex: 0,
            max: props.limit || 10
        };
    }

    renderDropDown (){
        const source = [
            {
                value: 5,
                label: '5'
            },
            {
                value: 10,
                label: '10'
            },
            {
                value: 15,
                label: '15'
            },
            {
                value: 25,
                label: '20'
            },
            {
                value: 50,
                label: '50'
            },
            {
                value: 100,
                label: '100'
            }
        ].filter(el => el.value < this.props.source.length);
        return (
            <DropDown
                source={source}
                value={this.state.max}
                onChange={(val) => {this.setState({max: val, startIndex: val});}}
                />
        );
    }

    renderPagination (limit){
        const {max, startIndex} = this.state;
        const {source, theme} = this.props;
        if (source.length > limit){
            const pagination = `${startIndex === 0 ? 1 : startIndex}-${(startIndex + max) > source.length ? source.length : startIndex + max} of ${source.length}`;
            const span = SPAN_TEXT + pagination;
            return (
                <div className={theme.pagination}>
                    <span>{SPAN_TEXT}</span>
                    {this.renderDropDown()}
                    <span>{pagination}</span>
                    <div className={theme.controls}>
                        {this.renderControls()}
                    </div>
                </div>
            );
        }

    }
    handleIndexChange (e, startIndex){
        e.preventDefault();
        this.setState({
            startIndex
        });
    }
    renderControls (){
        const {max, startIndex} = this.state;
        const {source} = this.props;
        const actions = [
            {
                icon: ARROW_LEFT,
                onClick: (e) => this.handleIndexChange(e, startIndex - max),
                disabled: startIndex === 0
            },
            {
                icon: ARROW_RIGHT,
                onClick: (e) => this.handleIndexChange(e, startIndex + max),
                disabled: (startIndex + max) >= source.length
            }
        ];
        return actions.map((elProps, index) => {
            return (<IconButton key={`paginationControl ${index}`} {...elProps}/>);
        });
    }

    renderSource (limit){
        const {max, startIndex} = this.state;
        const {source} = this.props;
        if (source.length > limit){
            return source.slice(startIndex, startIndex + max);
        } else {
            return source;
        }
    }

    handleOnSelect (select) {
        this.props.onSelect(this.transformIndexes(true, select));
    }

    transformIndexes (type, source = []){
        const {startIndex} = this.state;
        let transformedSource = [];
        if (type){
            transformedSource = source.map(i => i + startIndex);
        }
        if (!type) {
            transformedSource = source.map(i => i - startIndex);
        }
        return transformedSource;
    }

    render (){
        const {className, theme, limit, ...props} = this.props;
        const cls = classnames(theme.tableWithPagination, className);
        return (
            <div className={cls}>
                <Table {...props} onSelect={this.handleOnSelect.bind(this)} source={this.renderSource(limit || 10)}
                                  selected={this.transformIndexes(false, this.props.selected)}
                                  className={cls}
                    />
                {this.renderPagination(limit || 10)}
            </div>
        );
    }
}

export default TableWithPagination;

