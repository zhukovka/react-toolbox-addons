import React from 'react';
import SliderComponent from '../../components/slider-component';
import CardMediaPlusTest from './cardMediaTest.js';

import {Row, Col} from '../../components/grid';

const TestSliderComponent = () => {
    return (
        <Row expanded>
            <Col small={10}>
                <SliderComponent>
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                    <CardMediaPlusTest />
                </SliderComponent>
            </Col>
        </Row>
    );
};

export default TestSliderComponent;
