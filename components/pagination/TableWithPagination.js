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
    static defaultProps = {
        limit: 10
    };
    static getValuesForDropDown (start, len){
        const res = [];
        const firstEl = Math.ceil(start / 2);
        res.push({value: firstEl, label: firstEl + ''});
        for (let i = start; i < len; i = Math.pow(i, 2)){
            res.push({value: i, label: i + ''});
        }
        return res;
    }
    constructor (props){
        super(props);
        this.state = {
            startIndex: 0,
            max: props.limit
        };
    }

    renderDropDown (){
        const {source, limit} = this.props;
        const ddSource = TableWithPagination.getValuesForDropDown(limit, source.length);
        const getIdx = (val) => {
            const {startIndex} = this.state;
            const idx = (startIndex - val);
            return idx > 0 ? idx : 0;
        };
        return (
            <DropDown
                source={ddSource}
                value={this.state.max}
                onChange={(val) => {this.setState({max: val, startIndex: getIdx(val)});}}
                />
        );
    }

    renderPagination (limit){
        const {max, startIndex} = this.state;
        const {source, theme} = this.props;
        const sourceLen = source.length;
        if (sourceLen > limit){
            const pagination = `${startIndex === 0 ? 1 : startIndex}-${(startIndex + max) > sourceLen ? sourceLen : startIndex + max} of ${sourceLen}`;
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
                onClick: (e) => this.handleIndexChange(e, (startIndex - max) < 0 ? 0 : (startIndex - max)),
                disabled: startIndex === 0
            },
            {
                icon: ARROW_RIGHT,
                onClick: (e) => this.handleIndexChange(e, startIndex + max),
                disabled: (startIndex + max) >= source.length
            }
        ];
        return actions.map((elProps, index) => {
            return (<IconButton key={`paginationControl_${index}`} {...elProps}/>);
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
                <Table {...props} onSelect={this.handleOnSelect.bind(this)} source={this.renderSource(limit)}
                                  selected={this.transformIndexes(false, this.props.selected)}
                                  className={cls}
                    />
                {this.renderPagination(limit)}
            </div>
        );
    }
}

export default TableWithPagination;

