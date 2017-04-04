import React from 'react';

import {Upload} from '../../components/upload-zone';

const TestUpload = () => {
    return (
        <Upload onUpload={(file)=>{console.log(file);}}
            requirements={{width: 1200, height: 800}}
        />
    );
};

export default TestUpload;
