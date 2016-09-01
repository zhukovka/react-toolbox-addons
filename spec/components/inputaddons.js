import React from 'react';
import {StyledInput} from '../../components/input-addons/';
import CardTitlePrimary from '../../components/card-addons/CardTitlePrimary';

const InputAddonsTest = (props) => {
    return (
        <section>
            <h5>Input Addons</h5>
            <StyledInput large value="Kukuruku"/>
            <CardTitlePrimary>
                <StyledInput disabled large white value="Kukuruku0"/>
                <StyledInput large white value="Kukuruku1"/>
            </CardTitlePrimary>
        </section>
    );
};

export default InputAddonsTest;
