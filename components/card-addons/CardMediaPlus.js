import React, {PropTypes} from 'react';
import {CardMedia} from 'react-toolbox/lib/card';

const CardMediaPlus = ({children, ...other}) => {
        return (
            <CardMedia {...other}>
                <div className="test" style={{height: '100%'}} >
                    {children}
                </div>
            </CardMedia>
        );
};
CardMediaPlus.propTypes = {
    props: PropTypes.object
};

export {CardMediaPlus};
