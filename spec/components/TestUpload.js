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
                        min: {
                            width: 100,
                            height: 100
                        }
                    }}
            />
        </div>

    );
};

export default TestUpload;
