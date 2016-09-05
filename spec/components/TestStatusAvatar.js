import React from 'react';
import StatusAvatar from '../../components/statusavatar';

const TestStatusAvatar = () => {
    const TEST_IMAGE = 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg';
    const testProps = {
        image: TEST_IMAGE,
        status: 'warning'
    };
    return (
        <StatusAvatar {...testProps}/>
    );
};

export default TestStatusAvatar;
