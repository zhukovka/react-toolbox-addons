import React, {PropTypes, Component} from 'react';
import theme from './theme.scss';
import {CardTitleButtons} from '../../components/card-addons';

const ICON_EXPAND = 'expand_more';
const ICON_LESS = 'expand_less';

class FixedBottomSheet extends Component{
    constructor (props){
        super(props);
        this.state = {
            expanded: false
        };
    }
    render (){
        const {children} = this.props;
        return (
            <div className={theme.fixedBottomSheet}>
                <div className={theme['fixedBottomSheet--header']}>
                    {children[0]}
                </div>
                {this.state.expanded && children[1]}
                <CardTitleButtons buttons={[{icon: (this.state.expanded ? ICON_EXPAND : ICON_LESS), onClick: ()=>this.setState({expanded: !this.state.expanded})}]}/>
            </div>
        );
    }
}

FixedBottomSheet.propTypes = {
    children: PropTypes.any
};

export {FixedBottomSheet};
