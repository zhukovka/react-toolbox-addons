import React from 'react';

import {Upload} from '../../components/upload-zone';

const TestUpload = () => {
    return (
        <Upload onUpload={(file)=>{console.log(file)}}>

        </Upload>
    );
};

export default TestUpload;
