import React, {PropTypes, Component} from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import Input from 'react-toolbox/lib/input';

const ICON_EDIT = 'edit';
const INPUT_TYPE_TEXT = 'text';

class EditableTitle extends Component{
    constructor (props){
        super(props);
        this.state = {
            onHover: false,
            value: props.value
        };
    }
    handleChange (e){
        this.setState({
            value: e
        },()=>{
            console.log(e);
        });
    }
    toggleOnHover (bool){
        this.setState({
            onHover: bool
        });
    }
    renderIcon (onHover, editable, onEdit){
        if (onHover && !editable){
            return (<FontIcon value={ICON_EDIT} onClick={onEdit} style={{fontSize: '1em'}}/>);
        }
    }
    render (){
        const {onHover} = this.state;
        const {editable, value, onBlur, onEdit} = this.props;
        if (!editable){
            return (
                <div onMouseOver={this.toggleOnHover.bind(this, true)}
                   onMouseLeave={this.toggleOnHover.bind(this, false)}
                   style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <span>{value}</span>
                    {this.renderIcon(onHover, editable, onEdit)}
                </div>
            );
        } else {
            return (<Input type={INPUT_TYPE_TEXT} value={value} onBlur={onBlur} style={{padding: '0'}}/>);
        }
    }
}

EditableTitle.propTypes = {
    editable: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export {EditableTitle};
