import React from 'react';
import StepsList from '../../components/stepslist/StepsList';

const StepsListTest = (props) => {
    const steps = [
        {name: 'Lorem', done: true},
        {name: 'Lorem ipsum', done: true},
        {name: 'Lorem ipsum dolor', active: true},
        {name: 'Lorem ipsum dolor sit amet'}
    ];
    return (
        <StepsList steps={steps}/>
    );
};

export default StepsListTest;
