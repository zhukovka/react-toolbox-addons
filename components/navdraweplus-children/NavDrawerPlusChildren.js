import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import {CardTitleButtons} from '../card-addons/index';
import {NavDrawer, AppBar} from 'react-toolbox';
import {ButtonProps} from '../rtcomponentsprops';
import ExpandIcon from '../cardexpandable/ExpandIcon.js';

import {
    CLOSE_STATUS,
    OPEN_STATUS,
    MIDDLE_STATUS,
    TOP_ELEMENT,
    BOTTOM_ELEMENT
} from './constants.js';

class NavDrawerPlusChildren extends Component {
    static propTypes = {
        active: PropTypes.bool,
        buttons: PropTypes.arrayOf(ButtonProps),
        children: PropTypes.any,
        className: PropTypes.string,
        onClick: PropTypes.func,
        onOverlayClick: PropTypes.func,
        openState: PropTypes.oneOf([0, 1, 2]),
        permanentAt: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
        pinned: PropTypes.bool,
        primary: PropTypes.bool,
        scrollY: PropTypes.bool,
        theme: PropTypes.shape({
            active: PropTypes.string,
            drawerContent: PropTypes.string,
            lgPermanent: PropTypes.string,
            mdPermanent: PropTypes.string,
            navDrawer: PropTypes.string,
            pinned: PropTypes.string,
            scrim: PropTypes.string,
            scrollY: PropTypes.string,
            smPermanent: PropTypes.string,
            wide: PropTypes.string,
            xlPermanent: PropTypes.string,
            xxlPermanent: PropTypes.string,
            xxxlPermanent: PropTypes.string
        }),
        titleForFirstChild: PropTypes.string,
        titleForSecondChild: PropTypes.string,
        width: PropTypes.oneOf(['normal', 'wide'])
    };
    static modes = {
        OPEN: 1,
        PREVIEW: 2,
        CLOSED: 0
    };

    static eq (a, b) {
        return a === b;
    }

    static getNextStatus (currentStatus) {
        let resultStatus = '';
        switch (currentStatus) {
            case OPEN_STATUS :
                resultStatus = CLOSE_STATUS;
                break;
            case CLOSE_STATUS :
                resultStatus = MIDDLE_STATUS;
                break;
            case MIDDLE_STATUS :
                resultStatus = OPEN_STATUS;
                break;
            default :
                resultStatus = MIDDLE_STATUS;
                break;
        }
        return resultStatus;
    }
    static getPreviousStatus (currentStatus){
        let resultStatus = '';
        switch (currentStatus) {
            case OPEN_STATUS :
                resultStatus = MIDDLE_STATUS;
                break;
            case CLOSE_STATUS :
                resultStatus = OPEN_STATUS;
                break;
            case MIDDLE_STATUS :
                resultStatus = CLOSE_STATUS;
                break;
            default :
                resultStatus = MIDDLE_STATUS;
                break;
        }
        return resultStatus;
    }
    constructor (props){
        super(props);
        this.state = {
            next: MIDDLE_STATUS,
            prev: MIDDLE_STATUS
        };
    }
    handleClick (e) {
        this.setState({
            next: NavDrawerPlusChildren.getNextStatus(this.state.next),
            prev: NavDrawerPlusChildren.getPreviousStatus(this.state.prev)
        });
    }
    renderTitle (isFirstElement, index) {
        const {titleForFirstChild, titleForSecondChild, buttons, onClick, theme} = this.props;
        const btns = [...(buttons || []), {icon: 'close', onClick: (e)=>onClick(e)}];
        if (isFirstElement){
            return (<AppBar key={'navDrawerAppBar_' + index} theme={theme}>
                <h5>
                    {titleForFirstChild}
                </h5>
                <CardTitleButtons center buttons={btns}/>
            </AppBar>);
        } else {
            const _icon = <ExpandIcon isOpen={!NavDrawerPlusChildren.eq(this.state.next, OPEN_STATUS)}/>;
            const _btn = [{icon: _icon, onClick: this.handleClick.bind(this)}];
            return (<AppBar key={'navDrawerAppBar_' + index} theme={theme}>
                    <h5>
                        {titleForSecondChild}
                    </h5>
                    <CardTitleButtons center buttons={_btn}/>
                </AppBar>);
        }
    }

    renderChildren () {
        const {theme, children, openState} = this.props;
        return React.Children.map(children, (c, i)=>{
            const topOrBottom = NavDrawerPlusChildren.eq(i, 0) ? TOP_ELEMENT : BOTTOM_ELEMENT;
            const clsForTop = classnames(theme.top_element, [theme[this.state.next]], {
                [theme.open]: !children[1]
            });
            const clsForBottom = classnames(theme.bottom_element, theme[this.state.prev]);
            if (!((openState === 2 || openState === 0) && i === 1)) {
            return (
                <div key={i + topOrBottom} className={NavDrawerPlusChildren.eq(i, 0) ? clsForTop : clsForBottom}>
                    {this.renderTitle(NavDrawerPlusChildren.eq(i, 0), i)}
                    <div className={theme.columnContent} style={{overflow: i === 1 && 'hidden'}}>
                        {c}
                    </div>
                </div>);
            } else {
                return null;
            }
        });
    }

    render () {
        const {theme, className, openState, pinned} = this.props;
        const classes = classnames(className, theme.navDrawerPlus, {
            [theme.preview]: openState === NavDrawerPlusChildren.modes.PREVIEW
        });
        return (
            <NavDrawer active={openState === NavDrawerPlusChildren.modes.OPEN}
                       pinned={pinned}
                       theme={theme}
                       className={classes}>
                <div className={theme.wrapper}>
                    {this.renderChildren()}
                </div>
            </NavDrawer>
        );
    }

}

export default NavDrawerPlusChildren;
export {NavDrawerPlusChildren};
