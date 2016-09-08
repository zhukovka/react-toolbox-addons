import React from 'react';
import {StyledInput, StyledDropdown} from '../../components/input-addons/';
import CardTitlePrimary from '../../components/card-addons/CardTitlePrimary';
import InputGroup from '../../components/inputgroup';
import DatePicker from 'react-toolbox/lib/date_picker';
import FontIcon from 'react-toolbox/lib/font_icon';
const countries = [
    {value: 'EN-gb', label: 'England'},
    {value: 'ES-es', label: 'Spain'},
    {value: 'TH-th', label: 'Thailand'},
    {value: 'EN-en', label: 'USA'}
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

            <h5>Styled input icons</h5>
            <StyledInput value="Kukuruku" label="name" icon="room"/>
            <StyledInput value="Kukuruku" label="name" icon="room" rightIcon/>

            <h5>StyledInput empty</h5>

            <StyledInput disabled value="" label="Empty"/>

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

            <h5>Input group</h5>
            <InputGroup>
                <DatePicker label='Birthdate' sundayFirstDayOfWeek value={new Date(2015, 10, 16)}/>
                <FontIcon value='favorite'/>
            </InputGroup>

            <h5>Input group right icon</h5>
            <InputGroup rightIcon>
                <DatePicker label='Birthdate' sundayFirstDayOfWeek value={new Date(2015, 10, 16)}/>
                <FontIcon value='favorite'/>
                <DatePicker label='Birthdate' sundayFirstDayOfWeek value={new Date(2015, 10, 16)}/>
                <FontIcon value='favorite'/>
            </InputGroup>
        </section>
    );
};

export default InputAddonsTest;
