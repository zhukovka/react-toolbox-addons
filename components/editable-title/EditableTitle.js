import React, {PropTypes, Component} from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import Input from 'react-toolbox/lib/input';

const ICON_EDIT = 'edit';
const INPUT_TYPE_TEXT = 'text';

class EditableTitle extends Component {
    constructor (props) {
        super(props);
        this.state = {
            onHover: false,
            editable: this.props.editable
        };
    }

    blur (e) {
        this.setState({
            editable: false
        });
        this.props.onBlur(e);
    }

    toggleOnHover (bool) {
        this.setState({
            onHover: bool
        });
    }

    iconClick (e) {
        const input = e.currentTarget.parentElement.querySelector('input');
        this.setState({
            editable: true
        }, ()=> {
            if (input) {
                input.focus();
            }
        });
    }

    renderIcon () {
        const {editable, theme} = this.props;
        const {onHover} = this.state;
        if (onHover && !editable) {
            return (
                <FontIcon value={ICON_EDIT} onClick={this.iconClick.bind(this)}
                          className={theme['editableTitle--editIcon']}/>);
        }
    }

    render () {
        const {defaultValue, theme} = this.props;
        const {editable} = this.state;
        return (
            <div onMouseOver={this.toggleOnHover.bind(this, true)}
                 onMouseLeave={this.toggleOnHover.bind(this, false)}
                 className={theme['editableTitle--titleWrapper']}>
                <Input type={INPUT_TYPE_TEXT} defaultValue={defaultValue} disabled={!editable}
                       onBlur={this.blur.bind(this)}
                       theme={theme}/>
                {this.renderIcon()}
            </div>
        );
    }
}

EditableTitle.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired,
    theme: PropTypes.object
};

export {EditableTitle};
