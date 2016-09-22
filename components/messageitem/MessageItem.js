import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {MESSAGEITEM} from '../identifiers';
import {ListItem} from 'react-toolbox/lib/list';
class MessageItem extends ListItem {
    render () {
        const {className, theme, me, time, ...other} = this.props;
        const listProps = {
            className: classnames(theme.messageitem, {[theme.me]: me}, className),
            theme,
            ...other
        };
        if (me) {
            listProps.leftIcon = 'me';
        }
        return (
            <div className={theme.message}>
                <ListItem {...listProps} />
                <span className={theme.time}>
                    {time}
                </span>
            </div>
        );
    }
}

MessageItem.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    me: PropTypes.bool,
    theme: PropTypes.shape({
        listItem: PropTypes.string
    }),
    time: PropTypes.string
};
const factory = () => MessageItem;
export default themr(MESSAGEITEM)(MessageItem);
export {factory as MessageItemFactory};
export {MessageItem};
