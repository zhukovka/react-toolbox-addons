import React, {PropTypes} from 'react';
import classnames from 'classnames';
import theme from './theme.scss';
import Avatar from 'react-toolbox/lib/avatar';
export const ICON_DONE = 'done';
import {Row, Col} from '../../lib/grid';
import ChipTransparent from '../chips/ChipTransparent';
import Checkmark from '../checkmark/Checkmark';

const StepsList = (props) => {
    const {steps} = props;

    const renderNavigationChip = (step, index, arr)=> {

        const last = (arr.length - 1 === index);
        const classes = classnames(theme.chip, {[theme.chip_last]: last});
        return (
            <Col key={index} shrink={last && true}>
                <ChipTransparent active={step.active} className={classes}>
                    {step.done ? <Checkmark/> : <Avatar title={index + ''}/>}<span className={theme.name}>{index} {step.name}</span><span className={theme.line}></span>
                </ChipTransparent>
            </Col>
        );
    };


    return (
        <Row expanded>
            {steps.map(renderNavigationChip)}
        </Row>
    );
};
StepsList.propTypes = {
    steps: PropTypes.arrayOf(React.PropTypes.shape({
        name: PropTypes.string,
        active: PropTypes.bool,
        done: PropTypes.bool
    }))
};
export default StepsList;
