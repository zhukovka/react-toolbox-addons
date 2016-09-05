import React, {PropTypes, Children} from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import classnames from 'classnames';
import {Row, Col} from '../grid';
import VerticalDivider from '../verticaldivider';

/**
 * DialogLayout props extend Dialog props
 * example https://github.com/zhukovka/react-toolbox-addons/blob/master/components/dialoglayout/example.md
 */
const DialogLayout = ({children, className, theme, primary, ...other}) => {
    const classes = classnames(theme.dialogLayout, {
        [theme.primary]: primary
    }, className);

    const renderPanels = ()=> {
        const colSize = 12 / children.length | 0;
        const panels = [];
        Children.forEach(children, (child, index)=> {
            panels.push(<Col key={'col-' + index} small={colSize} medium={colSize} large={colSize}>
                {child}
            </Col>);
            panels.push(<VerticalDivider key={'div-' + index}/>);
        });
        return panels;
    };

    return (
        <Dialog {...other} type="medium" theme={theme} className={classes}>
            <Row expanded collapse>
                {renderPanels()}
            </Row>
        </Dialog>
    );
};
DialogLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Add to make dialog header background color primary
     * Boolean primary
     */
    primary: PropTypes.bool,
    theme: PropTypes.shape({
        active: PropTypes.string,
        body: PropTypes.string,
        button: PropTypes.string,
        dialog: PropTypes.string,
        navigation: PropTypes.string,
        title: PropTypes.string
    })
};

export default DialogLayout;
