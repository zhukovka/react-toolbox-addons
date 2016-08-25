import React from 'react';
import DropdownPlus from '../../components/dropdownplus/index.js';
import style from '../style';

const countries = [
    {value: 'EN-gb', label: 'England', img: 'http://'},
    {value: 'ES-es', label: 'Spain', img: 'http://'},
    {value: 'TH-th', label: 'Thailand', img: 'http://'},
    {value: 'EN-en', label: 'USA', img: 'http://'},
    {value: 'FR-fr', label: 'France', img: 'http://'}
];

class DropdownPlusTest extends React.Component {
    state = {
        dropdown4: 'TH-th'
    };

    handleChange = (dropdown, value) => {
        const newState = {};
        newState[dropdown] = value;
        this.setState(newState);
    };

    customDropdownPlusItem (data) {
        return (
            <div className={style.dropdownTemplate}>
                <img className={style.dropdownTemplateImage} src={data.img}/>
                <div className={style.dropdownTemplateContent}>
                    <strong>{data.label}</strong>
                    <small>{data.value}</small>
                </div>
            </div>
        );
    }

    render () {
        return (
            <section>
                <h5>DropdownPlus</h5>
                <p>lorem ipsum...</p>

                <DropdownPlus
                    allowBlank={false}
                    label="Country"
                    ref="dropdown1"
                    onChange={this.handleChange.bind(this, 'dropdown1')}
                    source={countries}
                    template={this.customDropdownPlusItem}
                    error=""
                    value=""
                />

                <DropdownPlus
                    label="test error"
                    ref="dropdown4"
                    onChange={()=>this.setState({error: 'kuku'})}
                    onAddAnother={()=>console.log('ololo')}
                    source={countries}
                    error={this.state.error}
                    value={this.state.dropdown4}
                />

                <DropdownPlus
                    disabled
                    ref="dropdown3"
                    label="Country"
                    onChange={this.handleChange.bind(this, 'dropdown3')}
                    source={countries}
                />
            </section>
        );
    }
}

export default DropdownPlusTest;
