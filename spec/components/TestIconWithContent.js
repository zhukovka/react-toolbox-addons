import React from 'react';
import IconWithContent from '../../components/icon-addons';

const TestIconWithContent = () => {

    return (
        <div>
            <div style={{
                width: '142px',
                height: '142px',
                display: 'inline-block',
                background: '#333'
            }}>
                <IconWithContent text={'Source bla bla'} icon={'videocam'} iconColor={'gray'} size={142} active={true} />
            </div>
            <div style={{
                width: '142px',
                height: '142px',
                display: 'inline-block',
                background: '#333'
            }}>
                <IconWithContent text={'Source bla bla'} icon={'videocam'} iconColor={'gray'} size={142}  />
            </div>
            <div style={{
                width: '142px',
                height: '142px',
                display: 'inline-block',
                background: '#333'
            }}>
                <IconWithContent text={'Source bla bla'} icon={'videocam'} iconColor={'gray'} size={142}  />
            </div>
        </div>
    );
};

export default TestIconWithContent;
