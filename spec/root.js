/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import BottomSheet from './components/bottomsheet';
import style from './style';
import {Button} from 'react-toolbox/lib/button';
import CardActionsRight from '../components/cardactionsright/index';
import {Row, Col} from '../components/grid/index';
import {CardActions} from 'react-toolbox/lib/card';

import {DropZone} from '../components/drop-zone';
import {UploadButton} from '../components/upload-button';

function onChangeFunc(e){
    console.log(e);
}
const Root = () => (
    <div className={style.app}>
        <UploadButton handlerOnChange={onChangeFunc} icon="photo_camera" className="custom" preview>
        </UploadButton>
        <h1>React Toolbox Addons
            <small>Spec {VERSION}</small>
        </h1>
        <DropZone handlerOnChange={onChangeFunc}>
            Text
        </DropZone>
        <BottomSheet />
        <CardActions>
            <Button label="Action default 1" />
            <Button label="Action 2" />
        </CardActions>
        <CardActionsRight>
            <Button label="Action right1" />
            <Button label="Action 2" />
        </CardActionsRight>
        <Row expanded align={'middle'}>
            <Col small={2}>
                <Button label='ololosha' flat onClick={()=> {
              console.log('kuku');
            }}/>
            </Col>
            <Col small={4} offset={'small-offset-6'} align={'stretch'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque explicabo ipsam, magni molestias quidem quis saepe sit. Ab ad assumenda delectus et excepturi facere illo incidunt laborum, sequi veniam?
                <Button label='kukuruku' flat/>
                <Button label='pysch' flat primary/>
            </Col>
        </Row>
    </div>
);

export default Root;
