import React from 'react';
import AvatarOverlay from '../../components/avatar-overlay';

const TEST_IMAGE = 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg';
const TestAvatarOverlay = () => {
    return (
        <AvatarOverlay icon="done" image={TEST_IMAGE} />
    );
};

export default TestAvatarOverlay;
