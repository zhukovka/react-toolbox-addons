/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import BottomSheet from './components/bottomsheet';
import style from './style';
import {Button, IconButton} from 'react-toolbox/lib/button';
import CardActionsRight from '../components/cardactionsright/index';
import {CardActions} from "react-toolbox/lib/card";
const Root = () => (
    <div className={style.app}>
        <h1>React Toolbox Addons
            <small>Spec {VERSION}</small>
        </h1>
        <BottomSheet />
        <CardActions>
            <Button label="Action default 1" />
            <Button label="Action 2" />
        </CardActions>
        <CardActionsRight>
            <Button label="Action right1" />
            <Button label="Action 2" />
        </CardActionsRight>
    </div>
);

export default Root;
