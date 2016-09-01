import React from 'react';
import {StyledInput, StyledDropdown} from '../../components/input-addons/';
import CardTitlePrimary from '../../components/card-addons/CardTitlePrimary';
const countries = [
    { value: 'EN-gb', label: 'England' },
    { value: 'ES-es', label: 'Spain'},
    { value: 'TH-th', label: 'Thailand' },
    { value: 'EN-en', label: 'USA'}
];

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

            <StyledInput value="Kukuruku" label="name"/>

            <h5>Styled Dropdown</h5>

            <StyledDropdown auto
                            label="test"
                            onChange={(val)=>console.log(val)}
                            source={countries}
                            value='EN-gb'/>

            <StyledDropdown auto
                            label="test"
                            disabled
                            onChange={(val)=>console.log(val)}
                            source={countries}
                            value='EN-gb'/>

        </section>
    );
};

export default InputAddonsTest;
