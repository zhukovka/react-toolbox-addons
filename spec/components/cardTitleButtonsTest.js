import React from 'react';
import {CardTitleButtons} from '../../components/card-addons';

function checkButtonsActions (e) {
    console.log(e);
}
const testButtons = [
    {
        icon: 'add',
        onClick: checkButtonsActions
    },
    {
        icon: 'done',
        onClick: checkButtonsActions
    },
    {
        icon: 'close',
        onClick: checkButtonsActions
    },
    {
        icon: 'photo_camera',
        onClick: checkButtonsActions
    }
];

const CardTitleButtonsTest = () => {

    return (
        <CardTitleButtons buttons={testButtons}/>
    );
};
export default CardTitleButtonsTest;
