import React from 'react';
import TableWithPagination from '../../components/pagination';

class TestTableWidthPagination extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            selected: []
        };
    }
    handleOnSelect (selected){
        this.setState({
            selected
        });
    }
    render (){
    const model = {
        name: {
            type: String
        },
        age: {
            type: Number
        }
    };
    const source = [
        {name: 'john', age: 99},
        {name: 'bob', age: 99},
        {name: 'Lola', age: 99},
        {name: 'bora', age: 99},
        {name: 'fora', age: 99},
        {name: 'mona', age: 99},
        {name: 'nona', age: 99},
        {name: 'pola', age: 99},
        {name: 'qwe', age: 99},
        {name: 'asd', age: 99},
        {name: 'zxc', age: 99}
    ];

    const props = {
        source,
        model,
        onSelect: this.handleOnSelect.bind(this),
        selectable: true,
        multiSelectable: true,
        selected: this.state.selected,
        limit: 10
    };

        return (<TableWithPagination {...props}/>);
    }
};

export default TestTableWidthPagination;
