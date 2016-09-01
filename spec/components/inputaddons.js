import React from 'react';
import {StyledInput} from '../../components/input-addons/';
import CardTitlePrimary from '../../components/card-addons/CardTitlePrimary';

const InputAddonsTest = (props) => {
    return (
        <section>
            <h5>Input Addons</h5>
            <StyledInput large value="Kukuruku"/>

            <h5>StyledInput white+disabled+lage</h5>
            <CardTitlePrimary>
                <StyledInput disabled large white value="Kukuruku0"/>
                <StyledInput large white value="Kukuruku1"/>
            </CardTitlePrimary>

            <h5>StyledInput disabled</h5>
            <StyledInput disabled value="Kukuruku" label="name"/>
        </section>
    );
};

export default InputAddonsTest;
