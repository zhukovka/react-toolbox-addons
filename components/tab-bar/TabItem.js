import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
    TAB_ITEM,
    TAB_ITEM_ACTIVE
} from './constants.js';
import {ListItem} from 'react-toolbox/lib/list';

const TabItem = ({children, theme, active, className}) => {
    const classes = classnames(theme[TAB_ITEM], {
        [theme[TAB_ITEM_ACTIVE]]: active
    }, className);
  return (
      <ListItem data-react-toolbox='tabItem' className={classes}>
          <span>{children}</span>
      </ListItem>
  );
};

TabItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    theme: PropTypes.object
};

export {TabItem};
export default TabItem;
