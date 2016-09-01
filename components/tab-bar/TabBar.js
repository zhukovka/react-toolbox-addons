import React, {PropTypes,Component} from 'react';
import {FlexList} from '../flexlist';
import {
    TAB_BAR
} from './constants';
import classnames from 'classnames';

class TabBar extends Component {
    constructor (props){
        super(props);
    }
    render () {
        const {theme, className} = this.props;
        const classes = classnames(theme[TAB_BAR], className);
        return (
            <FlexList className={classes}>
                {this.props.children}
            </FlexList>
        );
    }
}

TabBar.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    theme: PropTypes.object
};

export {TabBar};
export default TabBar;
