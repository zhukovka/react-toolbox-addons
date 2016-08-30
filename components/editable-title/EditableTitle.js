import React, {PropTypes, Component} from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import Input from 'react-toolbox/lib/input';

const ICON_EDIT = 'edit';
const INPUT_TYPE_TEXT = 'text';

class EditableTitle extends Component{
    constructor (props){
        super(props);
        this.state = {
            onHover: false
        };
    }

    toggleOnHover (bool){
        this.setState({
            onHover: bool
        });
    }
    renderIcon (){
        const {editable, onEdit, theme} = this.props;
        const {onHover} = this.state;
        if (onHover && !editable){
            return (<FontIcon value={ICON_EDIT} onClick={onEdit} className={theme['editableTitle--editIcon']} />);
        }
    }
    render (){
        const {onHover} = this.state;
        const {editable, defaultValue, theme} = this.props;
        if (!editable){
            return (
                <div onMouseOver={this.toggleOnHover.bind(this, true)}
                     onMouseLeave={this.toggleOnHover.bind(this, false)}
                     className={theme['editableTitle--titleWrapper']}
                >
                    <span>{defaultValue}</span>
                    {this.renderIcon()}
                </div>
            );
        } else {
            return (<Input type={INPUT_TYPE_TEXT} {...this.props} theme={theme}/>);
        }
    }
}

EditableTitle.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export {EditableTitle};
