import React, {PropTypes} from 'react';

const ButtonGroup = ({children})=> {
    return (
        <div>
            {children}
        </div>
    );
};
ButtonGroup.propTypes = {
    children: PropTypes.node
};

export default ButtonGroup;
