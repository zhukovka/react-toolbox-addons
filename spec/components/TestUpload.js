import React from 'react';

import {Upload} from '../../components/upload-zone';

const TestUpload = () => {
    return (
        <div>
            <p>avatar</p>
            <Upload onUpload={(file)=>{console.log(file);}}
            />
            <p>overlay</p>
            <Upload onUpload={(file)=>{console.log(file);}}
                    uploadType={"overlay"}
                    requirements={{
                        max: {
                            width: 600,
                            height: 600
                        }
                    }}
            />
        </div>

    );
};

export default TestUpload;
