import React, {PropTypes, Component} from 'react';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {CardTitleButtons} from '../card-addons/index';
import {NAVDRAWER_PLUS} from '../identifiers';
import {NavDrawer, AppBar} from 'react-toolbox';

const factory = () => {
    class NavDrawerPlus extends Component {
        static propTypes = {
            active: PropTypes.bool,
            children: PropTypes.any,
            className: PropTypes.string,
            onOverlayClick: PropTypes.func,
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
            title: PropTypes.string,
            width: PropTypes.oneOf(['normal', 'wide'])
        };

        constructor (props) {
            super(props);
            this.state = {
                active: this.props.active,
                pinned: this.props.pinned
            };
        }

        componentWillReceiveProps (nextProps) {
            const {active, pinned} = nextProps;
            this.setState({active, pinned});
        }

        toggleDrawer () {
            this.setState({
                active: !this.state.active,
                pinned: !this.state.pinned
            });
        }

        render () {
            const {title, children, theme, className} = this.props;
            const {active, pinned} = this.state;
            const btns = [{icon: 'close', onClick: this.toggleDrawer.bind(this)}];
            const classes = classnames(className, theme.navDrawerPlus);
            return (
                <NavDrawer active={active} pinned={pinned} theme={theme} className={classes}>
                    <AppBar theme={theme}>
                        <h5>
                            {title}
                        </h5>
                        <CardTitleButtons center buttons={btns}/>
                    </AppBar>
                    {children}
                </NavDrawer>
            );
        }
    }

    return NavDrawerPlus;
};
const NavDrawerPlus = factory();
export default themr(NAVDRAWER_PLUS)(NavDrawerPlus);
export {factory as navDrawerPlusFactory};
export {NavDrawerPlus};
