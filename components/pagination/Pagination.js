import React, {PropTypes, Component} from 'react';
import Table from 'react-toolbox/lib/table';
import DropDown from 'react-toolbox/lib/dropdown';
import classnames from 'classnames';

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    SPAN_TEXT
} from './constants.js';

class TableWithPagination extends Component{
    static propTypes = {
      theme: PropTypes.object,
      source: PropTypes.array,
        className: PropTypes.string
    };
    constructor (props){
        super(props);
        this.state = {
            items: props.source,
            startIndex: 0,
            max: 10
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
                value: 20,
                label: '20'
            }
        ];
        return (
            <DropDown
                source={source}
                onChange={(val) => {this.setState({max: val})}}
                />
        );
    }

    renderPagination (){
        const {max, startIndex} = this.state;
        const pagination = `${startIndex === 0 ? 1 : startIndex} / ${max}`;
        const span = SPAN_TEXT + pagination;
        return (
            <div>
                {span}
                {this.renderDropDown()}
            </div>
        );

    }

    render (){
        const {className, theme, source, ...props} = this.props;
        const {items} = this.state;
        const cls = classnames(theme.tableWithPagination, className);
        return (
            <div className={cls}>
                <Table source={items} {...props}/>
                <div className={theme.pagination}>

                </div>
            </div>
        );
    }
}

export default TableWithPagination;
