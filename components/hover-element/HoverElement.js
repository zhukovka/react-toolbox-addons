import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

class HoverElement extends Component {
    constructor (props){
        super(props);
        this.state = {
          onHover: false
        };
    }

    renderHoverElement (bool){
        const {theme, element, position} = this.props;
        const cls = classnames(theme.element, {
            [theme[position]]: position
        });
        if (bool) {
            return (
                <div className={cls}>
                    {element}
                </div>
            );
        } else {
            return null;
        }
    }

    handleHover (e, bool){
        e.preventDefault();
        this.setState({
            onHover: bool
        });
    }

    render (){
        const {children, theme, ...props} = this.props;
        const {onHover} = this.state;
        return (
            <div className={theme.wrapper}
                onMouseEnter={(e) => this.handleHover(e, true)}
                onMouseLeave={(e) => this.handleHover(e, false)}
                {...props}>
                {children}
                {this.renderHoverElement(onHover)}
            </div>
        );
    }
}

HoverElement.propTypes = {
    children: PropTypes.array,
    element: PropTypes.element,
    position: PropTypes.string,
    theme: PropTypes.object
};

HoverElement.defaultProps = {
    position: 'bottom'
};

export default HoverElement;
