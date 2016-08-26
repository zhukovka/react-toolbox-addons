import React, {PropTypes, Component} from 'react';
import {CardMedia, CardActions} from 'react-toolbox/lib/card';
import {CardTitleButtons} from '../card-addons';
import Button from 'react-toolbox/lib/button';
import {StatusComponent} from '../status-component';

class CardMediaPlus extends Component {
    constructor (props){
        super(props);
        this.state = {
            hovered: false
        };
    }

    renderContentOnHover (){
        if (this.state.hovered){
        let moreIcon = (<CardTitleButtons buttons={[{icon: 'more_horiz', handlerOnClick: ()=>{}}]} />)
        return (
            <CardActions style={{height: '100%'}}>

                <div style={{color: '#fff', position: 'relative', width: '100%', height: '100%', display: 'flex','alignItems' : 'center'}}>
                    {moreIcon}

                    <Button style={{color: 'inherit', width: '100%', border: '2px solid #fff'}} label={'view'.toUpperCase()} flat />
                </div>
            </CardActions>
        );
        } else {
            return (
                <CardTitleButtons buttons={[{icon: (<StatusComponent status={this.props.status}/>)}]}/>
            );
        }
    }
    render () {
        const {status, ...other} = this.props;
        return (
            <CardMedia {...other}
                       contentOverlay={this.state.hovered}
                       onMouseLeave={(e)=>{this.setState({hovered: false})}}
                       onMouseOver={(e)=>{this.setState({hovered: true})}}>

                {this.renderContentOnHover()}
            </CardMedia>
        );
    }
}
CardMediaPlus.propTypes = {
    props: PropTypes.object
};

export {CardMediaPlus};
