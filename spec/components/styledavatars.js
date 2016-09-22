import React from 'react';
import StyledAvatar from '../../components/styledavatar';
import {List, ListItem} from 'react-toolbox/lib/list';
import Avatar from 'react-toolbox/lib/avatar';

const StyledAvatarTest = (props) => {

    return (
        <section>
            <h5>Styled Avatars</h5>
            <StyledAvatar icon="add"/>
            <StyledAvatar accent icon="add"/>


            <h5>Avatars images</h5>
            <Avatar image="https://placeimg.com/80/80/animals"/>
            <Avatar image="https://placeimg.com/80/40/animals"/>
            <Avatar><img src="https://placeimg.com/80/40/animals"/></Avatar>
            <h5>Styled Avatars images</h5>
            <StyledAvatar image="https://placeimg.com/80/80/animals"/>
            <StyledAvatar image="https://placeimg.com/80/40/animals"/>
            <StyledAvatar><img src="https://placeimg.com/80/40/animals"/></StyledAvatar>
            <h5>Styled Avatars background</h5>


            <h5>Styled Avatars in List</h5>
            <List selectable ripple>
                <ListItem
                    avatar={<StyledAvatar primary icon="add"/>}
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    rightIcon='star'
                />
                <ListItem
                    avatar={<StyledAvatar primary icon="add"/>}
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                    rightIcon='star'
                />
                <ListItem
                    avatar="https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg"
                    caption='Not square image'
                    rightIcon='star'
                />
                <ListItem
                    avatar={<StyledAvatar><img src="https://placeimg.com/80/40/animals"/></StyledAvatar>}
                    caption='Not square image'
                    rightIcon='star'
                />

                <ListItem caption='Styled Avatars in List left icon' leftIcon={<StyledAvatar accent icon="add"/>}/>
            </List>
        </section>
    );
};

export default StyledAvatarTest;
