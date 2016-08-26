import React, {PropTypes} from 'react';

const CardActionsHover = ({hovered, children}) => {
    const style = {color: '#fff', height: '100%', display: 'flex', 'alignItems': 'center', backgroundColor: 'none'};
    if (hovered) {
        return (
            <div style={{height: '100%', backgroundColor: 'rgba(0,0,0,.5)'}}>
                <div style={style}>
                    {children}
                </div>
            </div>
        );
    } else {
        return null;
    }
};
CardActionsHover.propTypes = {
    children: PropTypes.any,
    hovered: PropTypes.bool
};

export default CardActionsHover;
