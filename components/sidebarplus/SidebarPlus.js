import React, {PropTypes, Component} from 'react';
import {themr} from 'react-css-themr';
import classnames from 'classnames';
import {SIDEBAR_PLUS} from '../identifiers';
import {Sidebar, AppBar} from 'react-toolbox';
import {FontIcon} from 'react-toolbox';
import {IconButton} from 'react-toolbox';

const factory = () => {
    class SidebarPlus extends Component {
        static propTypes = {
            children: PropTypes.any,
            className: PropTypes.string,
            pinned: PropTypes.bool,
            scrollY: PropTypes.bool,
            headerAction: PropTypes.func,
            headerActionIcon: PropTypes.string,
            theme: PropTypes.shape({
                pinned: PropTypes.string,
                scrollY: PropTypes.string,
                sidebar: PropTypes.string,
                sidebarContent: PropTypes.string
            }),
            title: PropTypes.string,
            titleIcon: PropTypes.string,
            width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
        };

        constructor (props) {
            super(props);
        }

        render () {
            const {title, titleIcon, headerActionIcon, headerAction, children, theme, pinned, className} = this.props;
            const classes = classnames(theme.sidebarPlus, className);
            return (
                <Sidebar pinned={pinned} width={5} theme={theme} className={classes}>
                    <AppBar theme={theme}>
                        <div className={theme.appBarHeader}>
                            <div className={theme.title}>
                                <h5>
                                    {title}
                                </h5>
                                <FontIcon value={titleIcon}/>
                            </div>
                            <IconButton icon={headerActionIcon} onClick={(e)=> headerAction()}/>
                        </div>


                    </AppBar>
                    {children}
                </Sidebar>
            );
        }
    }

    return SidebarPlus;
};
const SidebarPlus = factory();
export default themr(SIDEBAR_PLUS)(SidebarPlus);
export {factory as sidebarPlusFactory};
export {SidebarPlus};
