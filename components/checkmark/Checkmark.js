import React from 'react';
import theme from './theme.scss';
import Avatar from 'react-toolbox/lib/avatar';
export const ICON_DONE = 'done';

const Checkmark = () => {
    return (
        <Avatar icon={ICON_DONE} theme={theme} />
    );
};

export default Checkmark;
