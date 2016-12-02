import React from 'react';
import HoverElement from '../../components/hover-element';
import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import Link from 'react-toolbox/lib/link';

const TestHoverElement = () => {

    const btn = (<Link href="http://" active label="Profile" icon="person" />);
    const el = (
        <Card>
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
        <HoverElement element={el} position={'bottom'}>
            {btn}
        </HoverElement>
    );
};

export default TestHoverElement;
