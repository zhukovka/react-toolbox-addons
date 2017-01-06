import React from 'react';
import IconWithContent from '../../components/icon-addons';

const TestIconWithContent = () => {

    return (
        <div style={{
            width: '142px',
            height: '142px'
        }}>
            <IconWithContent text={'Source bla bla'} icon={'videocam'} iconColor={'gray'} width={84}/>
        </div>
    );
};

export default TestIconWithContent;
