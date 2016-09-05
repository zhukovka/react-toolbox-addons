// import React, {PropTypes} from 'react';
// import FlexList from '../flexlist/FlexList.js';
// import {themr} from 'react-css-themr';
// import {LISTITEMACTIVE} from '../identifiers';
// import classnames from 'classnames';
// import InjectInput from 'react-toolbox/lib/input/Input.js';
// import { ListItem } from 'react-toolbox/lib/list';
// import theme from './theme.scss';

// const factory = (ListItem) => {
//     class ListItemActive extends FlexList {
//         static propTypes = {
//             theme: PropTypes.shape({
//                 active: PropTypes.string
//             })
//         };
//         constructor (props) {
//             super(props);
//         }
//
//         render () {
//             const _className = classnames(className, theme['active']);
//             return (
//                 <li key="plus-item" className={_className}>
//                     Active list item
//                 </li>);
//         }
//     }
// }

// const ListItemActive = factory(InjectInput);
// export default themr(LISTITEMACTIVE)(ListItemActive);
// export {factory as ListItemActiveFactory};
// export default {ListItemActive};

import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {LISTITEMACTIVE} from '../identifiers.js';
import InjectInput from 'react-toolbox/lib/input/Input.js';
import FlexList from '../flexlist/FlexList.js';
import theme from './theme.scss';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';

import { List, ListItem } from 'react-toolbox/lib/list';


const factory = (ListItem) => {
    class ListItemActive extends FlexList {
        static propTypes = {
            theme: PropTypes.shape({
                active: PropTypes.string
            })
        };

        constructor (props) {
            super(props);
        }

        renderItems () {
            return (
                <List className={{border: '5px solid'}}>
                    <ListItem><a href="#">11</a></ListItem>
                    <ListItem className={theme.active}><a href="#">222</a></ListItem>
                    <ListItem><a href="#">333</a></ListItem>
                </List>
            );
        }

        render () {

            return (
                <AppBar fixed flat>
                    <a href="/home">React Toolbox Docs</a>
                    <Navigation>
                        {this.renderItems()}
                    </Navigation>
                </AppBar>
            );
        }


    }
    return ListItemActive;
};
//
const ListItemActive = factory(InjectInput);
export default themr(LISTITEMACTIVE)(ListItemActive);
export {factory as listItemActiveFactory};
export {ListItemActive};
// export default DropdownPlus;
