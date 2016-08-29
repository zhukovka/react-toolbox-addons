import React, {PropTypes} from 'react';
import Button from 'react-toolbox/lib/button';

const ButtonView = (props) => {
    const ICON_VISIBILITY = 'visibility';

    return (
        <Button {...props} icon={ICON_VISIBILITY} />
    );
};
ButtonView.propTypes = {
    props: PropTypes.object
};

export {ButtonView};
