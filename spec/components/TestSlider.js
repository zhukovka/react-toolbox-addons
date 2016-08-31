import React from 'react';
import Slider from '../../components/slider';
import CardMediaPlusTest from './cardMediaTest';

const TestSlider = () => {
    return (
      <Slider>
          <CardMediaPlusTest />
          <CardMediaPlusTest />
          <CardMediaPlusTest />
          <CardMediaPlusTest />
          <CardMediaPlusTest />
      </Slider>
    );
};
export {TestSlider};
export default TestSlider;
