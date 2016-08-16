import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import BottomSheet from '../../components/bottomsheet';
import {Card, CardMedia, CardTitle, CardActions} from 'react-toolbox/lib/card';
import {ListItem, ListItemContent, ListDivider} from 'react-toolbox/lib/list';
import {FlexList} from '../../components/flexlist/index';
class BottomSheetTest extends React.Component {
    state = {
        cards: false,
        list: true
    };

    handleClick = () => {
        this.setState({cards: true});
    };

    render () {
        return (
            <section>
                <h5>BottomSheets</h5>
                <p>lorem ipsum...</p>
                <Button label='Show bottomsheet with cards' primary raised
                        onClick={()=>this.setState({list: false, cards: true})}/>

                <Button label='Show bottomsheet with list' primary raised
                        onClick={()=>this.setState({list: true, cards: false})}/>
                <BottomSheet active={this.state.cards} textColor="red">

                    <FlexList align="space-around">
                        <ListItem>
                            <ListItemContent>
                                <Card>
                                    <CardMedia
                                        aspectRatio="square"
                                        image="https://placeimg.com/200/200/nature">
                                        <CardTitle>Kukuruku</CardTitle>
                                    </CardMedia>
                                    <CardActions style={{justifyContent: 'center'}}>
                                        <IconButton icon="thumb_down"/>
                                        <IconButton icon="thumb_up"/>
                                        <IconButton icon="turned_in_not"/>
                                    </CardActions>
                                </Card>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent>
                                <Card>
                                    <CardMedia
                                        aspectRatio="square"
                                        image="https://placeimg.com/200/200/nature">
                                        <CardTitle>Test</CardTitle>
                                    </CardMedia>
                                    <CardActions style={{justifyContent: 'center'}}>
                                        <IconButton icon="thumb_down"/>
                                        <IconButton icon="thumb_up"/>
                                        <IconButton icon="turned_in_not"/>
                                    </CardActions>
                                </Card>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent>
                                <Card>
                                    <CardMedia
                                        aspectRatio="square"
                                        image="https://placeimg.com/200/200/nature">
                                        <CardTitle>Test</CardTitle>
                                    </CardMedia>
                                    <CardActions style={{justifyContent: 'center'}}>
                                        <IconButton icon="thumb_down"/>
                                        <IconButton icon="thumb_up"/>
                                        <IconButton icon="turned_in_not"/>
                                    </CardActions>
                                </Card>
                            </ListItemContent>
                        </ListItem>
                    </FlexList>

                </BottomSheet>
                <BottomSheet active={this.state.list}>
                    <FlexList selectable ripple inverse>
                        <ListItem caption='Contact the publisher' leftIcon='send'/>
                        <ListDivider />
                        <ListItem caption='Remove this publication' leftIcon='delete'/>
                    </FlexList>
                </BottomSheet>
            </section>
        );
    }
}

export default BottomSheetTest;
