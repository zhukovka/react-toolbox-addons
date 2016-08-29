import React, {PropTypes} from 'react';
import Input from 'react-toolbox/lib/input';

const StreamCardTitle = (props) => {
    if (props.editable) {
        return (<Input type={'text'} value={props.value} onChange={props.handlerOnChange}/>);
    } else {
        return (<span>{props.value}</span>);
    }
};

StreamCardTitle.propTypes = {
    editable: PropTypes.bool,
    handlerOnChange: PropTypes.func,
    value: PropTypes.string
};

export {StreamCardTitle};

