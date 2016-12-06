import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

class ElementClick extends Component {
    constructor (props){
        super(props);
        this.state = {
          show: false
        };
    }

    componentWillMount (){
        window.document.addEventListener('click', this.handleClick.bind(this), true);
    }

    componentWillUnmount (){
        window.document.removeEventListener('click', this.handleClick.bind(this), true);
    }

    handleClick (e) {
        e.preventDefault();
        const {appearElement} = this.refs;
        const {show} = this.state;
        if (appearElement){
            const hasElem = appearElement.contains(e.target);
            if (show && !hasElem) {
                this.setState({
                    show: false
                });
            }
        }
    }

    renderElement (bool){
        const {theme, element, position} = this.props;
        const cls = classnames(theme.element, {
            [theme[position]]: position
        });
        if (bool) {
            return (
                <div className={cls} ref='appearElement'>
                    {element}
                </div>
            );
        } else {
            return null;
        }
    }

    handleOnWrapperClick (e) {
        const {show} = this.state;
        if (!show){
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
                onClick={(e) => {
                    e.preventDefault();
                    this.handleOnWrapperClick(e);
                }}
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
