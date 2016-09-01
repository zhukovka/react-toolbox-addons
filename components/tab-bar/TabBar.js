import React, {PropTypes, Component} from 'react';
import {FlexList} from '../flexlist';

class TabBar extends Component {
    constructor (props){
        super(props);
    }
    render () {
        const {children} = this.props;
        return (
            <FlexList>
                {children}
            </FlexList>
        );
    }
}

TabBar.propTypes = {
    children: PropTypes.any
};

export {TabBar};
export default TabBar;
