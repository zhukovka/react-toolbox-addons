import React from 'react';
import Tooltip from 'react-toolbox/lib/tooltip';

const CustomTooltip = Tooltip(({theme, ...props}) => <div {...props} />);

export default CustomTooltip;
