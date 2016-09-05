import React, {PropTypes} from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import classnames from 'classnames';

const DialogLayout = ({children, className, theme, primary, ...other}) => {
    const classes = classnames(theme.dialogLayout, {
        [theme.primary]: primary
    },className);
    return (
        <Dialog {...other} theme={theme} className={classes}>
            {children}
        </Dialog>
    );
};
DialogLayout.propTypes = {
    actions: PropTypes.array,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onEscKeyDown: PropTypes.func,
    onOverlayClick: PropTypes.func,
    onOverlayMouseDown: PropTypes.func,
    onOverlayMouseMove: PropTypes.func,
    onOverlayMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    theme: PropTypes.shape({
        active: PropTypes.string,
        body: PropTypes.string,
        button: PropTypes.string,
        dialog: PropTypes.string,
        navigation: PropTypes.string,
        title: PropTypes.string
    }),
    title: PropTypes.string,
    type: PropTypes.string
};

export default DialogLayout;
