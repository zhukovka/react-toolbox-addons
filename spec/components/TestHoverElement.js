import React from 'react';
import ElementClick from '../../components/click-element';
import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {IconButton} from 'react-toolbox/lib/button';
const TestHoverElement = () => {

    const btn = (<IconButton icon="add" />);
    const el = (
        <Card type="wide">
            <CardTitle
                title="Title goes here"
                subtitle="Subtitle here"
                />
            <CardText style={{color: '#000'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum esse eum exercitationem incidunt laborum minima placeat quidem recusandae voluptates.</CardText>
            <CardActions>
                <Button label="Action 1" />
                <Button label="Action 2" />
            </CardActions>
        </Card>
    );
    return (
        <ElementClick element={el} position={'bottom'}>
            {btn}
        </ElementClick>
    );
};

export default TestHoverElement;
