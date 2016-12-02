import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import {IconButton} from 'react-toolbox/lib/button';

class ElementClick extends Component {
    constructor (props){
        super(props);
        this.state = {
          show: false
        };
    }

    renderElement (bool){
        const {theme, element, position} = this.props;
        const cls = classnames(theme.element, {
            [theme[position]]: position
        });
        if (bool) {
            return (
                <div className={cls} ref='hoverElement'>
                    <IconButton icon='close'
                                className={theme.iconClose}
                                onClick={(e) => {this.setState({show: false});}}
                        />
                    {element}
                </div>
            );
        } else {
            return null;
        }
    }

    handleOnWrapperClick (e) {
        e.preventDefault();
        if (!this.state.show){
            this.setState({
                show: true
            });
        }
    }

    render (){
        const {children, theme, ...props} = this.props;
        const {show} = this.state;
        return (
            <div className={theme.wrapper}
                onClick={this.handleOnWrapperClick.bind(this)}
                {...props}>

                {children}
                {this.renderElement(show)}
            </div>
        );
    }
}

ElementClick.propTypes = {
    children: PropTypes.array,
    element: PropTypes.element,
    position: PropTypes.string,
    theme: PropTypes.object
};

ElementClick.defaultProps = {
    position: 'bottom'
};

export default ElementClick;
