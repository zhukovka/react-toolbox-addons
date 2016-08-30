import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import {ListItem, ListItemLayout} from 'react-toolbox/lib/list';
import classnames from 'classnames';
import InjectListItemPlus from 'react-toolbox/lib/list/ListItem.js';
import {LISTITEMPLUS} from '../identifiers.js';

const factory = (liItem) => {
    class ListItemPlus extends ListItem {
        static propTypes = {
            themePlus: PropTypes.oneOf(['admin', 'orgAdmin', 'missionOwner', 'participant'])
        };

        groupChildren () {
            const children = {
                leftActions: [],
                rightActions: [],
                ignored: []
            };

            React.Children.forEach(this.props.children, (child, i) => {
                if (!React.isValidElement(child)) {
                    return;
                }

                const {listItemIgnore, ...rest} = child.props;
                const strippedChild = {...child, ...{props: rest}};

                if (listItemIgnore) {
                    children.ignored.push(strippedChild);
                    return;
                }
                if (child.type === ListItemContent) {
                    children.itemContent = strippedChild;
                    return;
                }
                const bucket = children.itemContent ? 'rightActions' : 'leftActions';
                children[bucket].push({...strippedChild, key: i});
            });

            return children;
        }

        render () {
            const {className, onMouseDown, to, onClick, ripple: hasRipple, theme, ...other} = this.props; //eslint-disable-line no-unused-vars
            const _className = classnames(this.props.theme.listItem, this.props.theme[this.props.themePlus]);

            const children = this.groupChildren();
            const content = <ListItemLayout theme={this.props.theme} {...children} {...other}/>;
            return (
                <li className={`${theme.listItem} ${_className}`} onClick={this.handleClick} onMouseDown={onMouseDown}>
                    {to ? <a href={this.props.to}>{content}</a> : content}
                    {children.ignored}
                </li>
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
