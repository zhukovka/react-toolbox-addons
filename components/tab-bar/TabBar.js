import React, {PropTypes, Component} from 'react';
import {FlexList} from '../flexlist';
import {
    TAB_BAR
} from './constants';
import classnames from 'classnames';

class TabBar extends Component {
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        theme: PropTypes.object
    };

    constructor (props) {
        super(props);
    }

    render () {
        const {theme, className, children} = this.props;
        const classes = classnames(theme[TAB_BAR], className);
        return (
            <FlexList className={classes}>
                {children}
            </FlexList>
        );
    }
}

export default TabBar;
