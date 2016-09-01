import React, {PropTypes} from 'react';
import Button from 'react-toolbox/lib/button';

const TabItem = ({children}) => {
  return (
      <Button flat>
          {children}
      </Button>
  );
};

TabItem.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.object
};

export {TabItem};
export default TabItem;
