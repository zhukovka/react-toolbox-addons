import React from 'react';
import {StyledInput} from '../../components/input-addons/';
import CardTitlePrimary from '../../components/card-addons/CardTitlePrimary';

const InputAddonsTest = (props) => {
    return (
        <section>
            <h5>Input Addons</h5>
            <StyledInput large value="Kukuruku"/>
            <CardTitlePrimary>
                <StyledInput large white value="Kukuruku"/>
            </CardTitlePrimary>
        </section>
    );
};

export default InputAddonsTest;
