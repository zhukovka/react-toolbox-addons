import React from 'react';
import CustomTooltip from '../../components/custom-tooltip';


const TestTooltipTitle = () => {
    const titleForCheck = 'default title for stream mission';
    const el = (<span>{titleForCheck}</span>);
    return (
        <div style={{width: '200px'}}>
            <CustomTooltip element={el} title={titleForCheck} position={'top'}/>
        </div>
    );

};

export default TestTooltipTitle;
