import React from 'react';
import {ListItem, ListItemContent, ListDivider} from 'react-toolbox/lib/list';
import {Card, CardText,CardMedia} from 'react-toolbox/lib/card';
import FontIcon from 'react-toolbox/lib/font_icon';

const StreamNewItem = ({onClick}) => {
    return (
        <ListItem>
            <ListItemContent>
                <Card onClick={(e)=>onClick(e)} style={{background: 'none', color: '#fff', boxShadow: 'none'}}>
                    <CardMedia color="#444" aspectRatio={'wide'}>
                        <FontIcon value={'add'}/>
                    </CardMedia>
                    <CardText>
                        <p>New Hardware</p>
                    </CardText>

                </Card>
            </ListItemContent>
        </ListItem>
    );
};

export {StreamNewItem};


