import React, {PropTypes} from 'react';
import {CardMedia} from 'react-toolbox/lib/card';

class CardMediaPlus extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            hovered: false
        };
    }
    toggleHover (bool){
        this.setState({
            hovered: bool
        });
    }
    renderChildrens (children){
        const {hovered} = this.state;
        if (hovered){
            return children[1];
        } else {
           return children[0];
        }
    }
    render (){
        const {children, ...other} = this.props;
        return (
            <CardMedia {...other} onMouseOver={this.toggleHover.bind(this, true)} onMouseLeave={this.toggleHover.bind(this, false)}>
                <div className="test" style={{height: '100%'}} >
                    {this.renderChildrens(children)}
                </div>
            </CardMedia>
        );
    }
};
CardMediaPlus.propTypes = {
    children: PropTypes.any
};

export {CardMediaPlus};
