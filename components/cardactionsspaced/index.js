/**
 * Created by mitya on 8/23/16.
 */
import React, {PropTypes} from 'react';
import {CardActions} from 'react-toolbox/lib/card';
import theme from './theme.scss';

const CardActionsSpaced = (props) => (
    <CardActions {...props} theme={theme}>
        {props.children}
    </CardActions>
);
CardActionsSpaced.propTypes = {
    children: PropTypes.any
};
export default CardActionsSpaced;
export {CardActionsSpaced as CardActionsSpaced};
