import React from 'react';
import {CardMediaPlus,CardTitleButtons} from '../../components/card-addons';

const CardMediaPlusTest = () =>{
    const TEST_IMG_URL = 'http://cdn.playbuzz.com/cdn/402d3240-a1df-4b70-ab11-0204c82b2b06/7917e75a-5724-4cb6-8e2d-1e42014c3eb9.jpg';
    return (
        <CardMediaPlus aspectRatio="square" image={TEST_IMG_URL} status={'ready'}>
        </CardMediaPlus>
    );

};
export default CardMediaPlusTest;
