import React from 'react';
import ShadowBox from '../../components/shadow-box';
import TestUpload from './TestUpload.js';
import Input from 'react-toolbox/lib/input';

const TestShadowBox = () => {

    return (
        <ShadowBox>
            <h3>Test SHadow box</h3>
            <TestUpload />
            <Input value='test'/>
        </ShadowBox>
    )
};

export default TestShadowBox;
