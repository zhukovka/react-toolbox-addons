import React from 'react';
import {StyledInput} from '../../components/input-addons';

const TestStyledInput = () => {
  const props = {
    value: 'test',
    label: 'label',
    type: 'text',
    large: true,
    autofocus: true
  };
  return (
    <StyledInput {...props}/>
  );
};

export default TestStyledInput;
