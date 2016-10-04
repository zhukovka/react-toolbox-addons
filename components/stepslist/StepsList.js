import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import Avatar from 'react-toolbox/lib/avatar';
import {Row, Col} from '../../lib/grid';
import InjectedChipTransparent from '../chips/ChipTransparent';
import Checkmark from '../checkmark/Checkmark';
import {STEPSLIST} from '../identifiers';

const factory = (ChipTransparent) => {
    const StepsList = ({steps, theme}) => {

        const renderNavigationChip = (step, index, arr)=> {

            const last = (arr.length - 1 === index);
            const classes = classnames(theme.chip, {[theme.chip_last]: last});
            return (
                <Col key={index} shrink={last && true}>
                    <ChipTransparent active={step.active} className={classes}>
                        {step.done ? <Checkmark/> : <Avatar title={index + ''}/>}<span
                        className={theme.name}>{index + 1} {step.name}</span><span className={theme.line}></span>
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
            active: PropTypes.bool,
            done: PropTypes.bool,
            name: PropTypes.string
        })),
        theme: PropTypes.shape({
            avatar: PropTypes.string,
            chip: PropTypes.string,
            line: PropTypes.string,
            name: PropTypes.string
        })
    };

    return StepsList;
};
const StepsList = factory(InjectedChipTransparent);
export default themr(STEPSLIST)(StepsList);
export {factory as stepsListFactory};
export {StepsList};
