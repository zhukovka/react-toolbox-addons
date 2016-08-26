import * as React from "react";
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
export interface CardExpandableProps {
    children:any;
}
export interface CardExpandableState {
    expanded:boolean;
}

class CardExpandable extends React.Component<CardExpandableProps, CardExpandableState> {

    constructor(props: CardExpandableProps){
        super(props);
        this.state = {
            expanded: true
        };
    }

    toggleExpanded() {
        this.setState({expanded: !this.state.expanded});
    }

    render() {


        return (
            <Card>
                <CardTitle
                    title="Title goes here"
                    subtitle="Subtitle here">
                    <Button onClick={()=>this.toggleExpanded()}>Expand</Button>
                </CardTitle>
                {this.renderContent()}

            </Card>
        );
    }

    private renderContent() {
        const {children} = this.props;
        if (this.state.expanded) {
            return (children);
        }
    }
}

export default CardExpandable;