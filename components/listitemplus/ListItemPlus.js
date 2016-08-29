import React, { PropTypes } from 'react';
import {themr} from 'react-css-themr';
import {List, ListItem} from 'react-toolbox/lib/list';
import classnames from 'classnames';
import InjectListItemPlus from 'react-toolbox/lib/list/ListItem.js';
import {LISTITEMPLUS} from '../identifiers.js';

const factory = (liItem) => {
    class ListItemPlus extends ListItem {
        static propTypes = {
            admin: PropTypes.string,
            children: PropTypes.any,
            className: PropTypes.string,
            disabled: PropTypes.bool,
            onClick: PropTypes.func,
            ripple: PropTypes.bool,
            theme: PropTypes.shape({
                listItem: PropTypes.string
            }),
            to: PropTypes.string,
            userRole: PropTypes.oneOf(['admin', 'org-admin'])
        };
        static defaultProps = {
        className: '',
        userRole: 'admin',
        disabled: false,
        ripple: false
    };
        // constructor (props) {
        //     super(props);
        // }

        renderListItemPlus (className) {
            const {theme} = this.props;
            const _className = classnames(className, theme.listItem);
            return (
                // <li key="li-item-plus" className={_className}>
                <li key="li-item-plus" className={classnames(theme.listItem)}>
                    list item plus
                </li>
            );
        }
        render () {
            const {theme, className, userRole} = this.props;
            return (
                <ul data-react-toolbox='list' className={theme.listItem}>
                    {this.renderListItemPlus()}
                </ul>
            );
        }


    }
    return ListItemPlus;
};
//
const ListItemPlus = factory(InjectListItemPlus);
export default themr(LISTITEMPLUS)(ListItemPlus);
export {factory as listItemPlusFactory};
export {ListItemPlus};
