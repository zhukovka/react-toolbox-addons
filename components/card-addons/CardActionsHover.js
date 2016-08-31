import React, {PropTypes} from 'react';

const CardActionsHover = ({children}) => {
    const style = {color: '#fff', height: '100%', display: 'flex', 'alignItems': 'center', backgroundColor: 'none'};
    return (
        <div style={{height: '100%', backgroundColor: 'rgba(0,0,0,.5)'}}>
            <div style={style}>
                {children}
            </div>
        </div>
    );
};
CardActionsHover.propTypes = {
    children: PropTypes.any
};

export default CardActionsHover;
