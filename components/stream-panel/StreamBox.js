import React, {PropTypes, Component} from 'react';
import {Card, CardText, CardMedia} from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import FontIcon from 'react-toolbox/lib/font_icon';

class ReactBox extends Component {
    constructor (props){
        super(props);
        this.state = {
            editable: false
        };
    }
    handleOnChange (e){
        this.setState({
            editable: false
        });
    }
    renderText (val){
        if (this.state.editable){
            return (<Input type={'text'} value={val} onChange={this.handleOnChange.bind(this)} />);
        } else {
            return (
                <p>
                    <span>{val}</span>
                    <FontIcon value={'edit'} onClick={()=>{this.setState({editable: true});}}/>
                </p>
            );
        }
    }
    render () {
        return (
            <div>
                <Card style={{background: 'none', color: '#fff', boxShadow: 'none'}}>
                    <div style={{boxSizing: 'border-box', 'border': '1px solid blue'}}>
                        <CardMedia image="http://lorempixel.com/400/200" aspectRatio={'wide'}></CardMedia>
                    </div>
                </Card>
                <div>
                    {this.renderText('some')}
                </div>
            </div>
        );
    }
}
;

export {ReactBox};

