import React from 'react';
import FlexCarousel from '../../components/flex-carousel';
import CardMediaPlusTest from './cardMediaTest.js';
const TestFlexCarousel = () => {
    return (
        <FlexCarousel>
            <h2>Start</h2>
            <CardMediaPlusTest/>
            <CardMediaPlusTest/>
            <CardMediaPlusTest/>
            <CardMediaPlusTest/>
            <CardMediaPlusTest/>
            <CardMediaPlusTest/>
            <CardMediaPlusTest/>
            <h2>End</h2>
        </FlexCarousel>
    );
};
/*
*
* <CardMediaPlusTest/>
 <CardMediaPlusTest/>
 <h3>4</h3>
 <h3>5</h3>
 <CardMediaPlusTest/>
 <h3>6</h3>
* */
export default TestFlexCarousel;
