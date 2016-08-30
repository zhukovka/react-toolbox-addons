/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import BottomSheet from './components/bottomsheet';
import DropdownPlus from './components/dropdownplus';
import style from './style';
import {Button} from 'react-toolbox/lib/button';
import CardActionsRight from '../components/cardactionsright/index';
import CardActionsSpaced from '../components/cardactionsspaced/index';
import {Row, Col} from '../components/grid/index';
import {CardActions} from 'react-toolbox/lib/card';
import ButtonGroup from '../components/buttongroup/ButtonGroup';
import {Upload} from '../components/upload-zone';
import {AdminListItem} from '../components/adminlistitem';
import {ListItemPlus} from '../components/listitemplus';
import {List, ListItem, ListSubHeader, ListDivider, ListCheckbox} from 'react-toolbox/lib/list';


function upload (file, result, e) {
    console.log(file);
    console.log(e);
}

const Root = () => (
    <div className={style.app}>
        <List selectable ripple>
            <h4>Mission Users List</h4>

            <ListItemPlus avatar='https://dl.dropboxusercontent.com/u/53778939/image1.png' themePlus="admin" caption="ADMIN"></ListItemPlus>
            <ListItemPlus avatar='https://dl.dropboxusercontent.com/u/53778939/image2.png' themePlus="orgAdmin" caption="Organization Admin"></ListItemPlus>
            <ListItemPlus avatar='https://dl.dropboxusercontent.com/u/53778939/jack_sparrow.png' themePlus="missionOwner" caption="Mission Owner"></ListItemPlus>
            <ListItemPlus avatar='https://dl.dropboxusercontent.com/u/53778939/User%20avatar.png' themePlus="participant" caption="Mission Participant"></ListItemPlus>

        </List>

        <List>

        </List>

        <h1>React Toolbox Addons
            <small>Spec {VERSION}</small>
        </h1>
        <Upload onUpload={upload}>
        </Upload>
        <BottomSheet />
        <h3>CardActions</h3>
        <CardActions>
            <Button label="Action default 1"/>
            <Button label="Action 2"/>
        </CardActions>
        <h3>CardActionsSpaced</h3>
        <CardActionsRight>
            <Button label="Action right1"/>
            <Button label="Action 2"/>
        </CardActionsRight>
        <h3>CardActionsSpaced</h3>
        <CardActionsSpaced>
            <Button label="Left"/>
            <ButtonGroup>
                <Button label="right1"/>
                <Button label="right2"/>
            </ButtonGroup>
        </CardActionsSpaced>



        <Row expanded align={'middle'}>
            <Col small={2}>
                <Button label='ololosha' flat onClick={()=> {
              console.log('kuku');
            }}/>
            </Col>
            <Col small={4} offset={'small-offset-6'} align={'stretch'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque explicabo ipsam, magni
                molestias quidem quis saepe sit. Ab ad assumenda delectus et excepturi facere illo incidunt laborum,
                sequi veniam?
                <Button label='kukuruku' flat/>
                <Button label='pysch' flat primary/>
            </Col>
        </Row>

        <DropdownPlus/>


    </div>
);

export default Root;
