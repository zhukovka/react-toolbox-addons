import React from 'react';
import TableWithPagination from '../../components/pagination';
import Table from 'react-toolbox/lib/table';

class TestTableWidthPagination extends React.Component{
    constructor(props){
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
        {name: 'Taras', age: 27},
        {name: 'Inna', age: 27}
    ];

    const props = {
        source,
        model,
        onSelect: this.handleOnSelect.bind(this),
        selectable: true,
        multiSelectable: true,
        selected: this.state.selected
    };

        return (<Table {...props}/>);
    }
};

export default TestTableWidthPagination;
