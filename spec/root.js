/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import Avatar from 'react-toolbox/lib/avatar';
import ButtonGroup from '../components/buttongroup';
import CardActionsRight from '../components/cardactionsright/index';
import CardActionsSpaced from '../components/cardactionsspaced/CardActionsSpaced';
import CardExpandable from './components/cardexpandable';
import CardMediaPlusTest from './components/cardMediaTest';
import CardTitleButtonsTest from './components/cardTitleButtonsTest';
import Checkmark from '../components/checkmark/Checkmark';
import ChipTransparent from '../components/chips';
import DialogLayout from './components/DialogLayoutTest';
import DisabledInput from '../components/disabledinput';
import Footer from '../components/footer';
import InputAddonsTest from './components/inputaddons';
import MenuListTest from './components/menulist';
import React from 'react';
import StepsList from './components/stepslist';
import style from './style';
import TestAvatar from './components/TestAvatar';
import TestAvatarOverlay from './components/TestAvatarOverlay';
import TestShadowBox from './components/TestShadowBox.js';
import TestStatusAvatar from './components/TestStatusAvatar';
import TestTabBar from './components/TestTabBar';
import TestUpload from './components/TestUpload';
import {Button, IconButton} from 'react-toolbox/lib/button';
import {CardActions, Card, CardTitle} from 'react-toolbox/lib/card';
import {CardMediaPrimary, CardTitlePrimary} from '../components/card-addons';
import {NavigationChips} from '../components/navigation-chips';
import {RedHeading} from '../components/headings';
import {Row, Col} from '../components/grid/index';
import {StatusComponent} from '../components/status-component';
import {StyledInput} from '../components/input-addons';
import TestAvatarCheckbox from './components/TestAvatarCheckbox';
import TestDialogWithImage from './components/TestDialogWithImage';
import StyledAvatar from './components/styledavatars';
import BottomSheetTest from './components/bottomsheet';
import HoverableContent from './components/HoverableContent';
import GroupListItem from './components/GroupListItem';
import LayoutTest from './components/layout';
import IconSwitcher from './components/IconSwitcher';
import TestChatContent from './components/TestChatContent.js';
import TestTableWithPagination from './components/TestPagination.js';
import TooltipWrapper from './components/TestTooltipTitle.js';
import TestHoverElement from './components/TestHoverElement.js';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import AvatarOverlay from '../components/avatar-overlay';

const Root = () => (

    <div className={style.app}>
     <AvatarOverlay title='some'/>
     <AppBar title="React Toolbox" leftIcon="menu">
      <Navigation type="horizontal">
       <TestHoverElement />
      </Navigation>
     </AppBar>

     <TooltipWrapper tooltip="my tooltip" label='test' style={{display: 'inline-block'}} tooltipPosition={'top'}>Hover me</TooltipWrapper>
     <TestTableWithPagination />
     <TestChatContent />
     <LayoutTest/>
     <IconSwitcher/>
     <LayoutTest/>
     <DialogLayout />
     <GroupListItem/>
     <HoverableContent/>
     <BottomSheetTest/>
     <CardExpandable/>
     <TestShadowBox />
     <TestStatusAvatar />
     <TestUpload/>
     <TestTabBar />
     <section>
      <h5>Button Group</h5>
      <ButtonGroup><IconButton icon='search'/><StyledInput type='text'/></ButtonGroup>
     </section>
     <h1>React Toolbox Addons
      <small>Spec {VERSION}</small>
     </h1>
     <Row>
      <Col small={2}>
       <TestAvatarOverlay />
      </Col>
     </Row>
     <StyledAvatar/>
     <section>
      <h5>MenuListTest</h5>
      <MenuListTest/>
     </section>

     <InputAddonsTest/>

     <Card style={{width: '200px'}}>
      <CardMediaPlusTest />
     </Card>
     <CardTitlePrimary>
      KUKURUKU
      <TestAvatar />
      <StatusComponent status="idle"/>
      <StatusComponent status="warning"/>
      <StatusComponent status="error"/>
      <StatusComponent status="ready"/>
      <CardTitleButtonsTest />

     </CardTitlePrimary>

     <CardTitle title='Default cardTitle' subtitle='def' style={{position: 'relative'}}>
      <CardTitleButtonsTest />
     </CardTitle>
     <CardTitle title='Accent cardTitle' subtitle='def'
                style={{position: 'relative', background: 'rgb(255,64,129)', color: '#fff'}}>
      <CardTitleButtonsTest />
     </CardTitle>

     <NavigationChips headers={['some new text and', 'some new text', 'some new text', 'some new', 'some new']}
                      currentIndex={2}/>

     <section>
      <h5>StepsList</h5>
      <StepsList/>
     </section>

     <section>
      <h5>CardMediaPrimary</h5>

      <CardMediaPrimary aspectRatio="wide"/>
     </section>


     <section>
      <h5>Headings</h5>
      <div>
       <RedHeading>RedHeading</RedHeading>
      </div>
     </section>

     <section>
      <h5>DisabledInput</h5>
      <DisabledInput label="test" value="123"/>
     </section>
     <section>
      <h5>CardActions</h5>
      <CardActions>
       <Button label="Action default 1"/>
       <Button label="Action 2"/>
      </CardActions>
     </section>
     <TestAvatarCheckbox/>
     <TestDialogWithImage/>

     <section>
      <h5>CardActionsSpaced</h5>
      <CardActionsRight>
       <Button label="Action right1"/>
       <Button label="Action 2"/>
      </CardActionsRight>
     </section>

     <section>

      <h5>CardActionsSpaced</h5>
      <CardActionsSpaced>
       <Button label="Left"/>
       <ButtonGroup>
        <Button label="right1"/>
        <Button label="right2"/>
       </ButtonGroup>
      </CardActionsSpaced>
     </section>

     <section>
      <h5>Grid</h5>
      <Row expanded align={'middle'}>
       <Col small={2}>
        <Button label='ololosha' flat onClick={()=> {
 console.log('kuu');
 }}/>
       </Col>
       <Col small={4} offset={'small-offset-6'} align={'stretch'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cumque explicabo ipsam, magni
        molestias quidem quis saepe sit. Ab ad assumenda delectus et excepturi facere illo incidunt
        laborum,
        sequi veniam?
        <Button label='kukuruku' flat/>
        <Button label='pysch' flat primary/>
       </Col>
      </Row>

     </section>


     <section>
      <Checkmark/>
     </section>

     <section>
      <h5>ChipTransparent</h5>
      <ChipTransparent>
       <Avatar title="A"/><span>Initial chip</span>
      </ChipTransparent>
      <ChipTransparent>
       <Checkmark/><span>Done chip</span>
      </ChipTransparent>
      <ChipTransparent active>
       <Avatar title="A"/><span>Active chip</span>
      </ChipTransparent>
     </section>
     <section>
        <Footer contentUrl="https://www.sonymcs.com/privacy/" contentMessage="Privacy | Terms"></Footer>
     </section>

    </div>
);


export default Root;
