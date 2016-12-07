import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import {IconButton} from 'react-toolbox/lib/button';
import {
    DEFAULT_POSITION,
    REF_APPEAR_ELEMENT,
    REF_CHILD,
    ICON_ARROW_DROP_DOWN,
    ICON_ARROW_DROP_UP,
    EVENT_CLICK_WINDOW,
    DIV,
    DIV_KEY
} from './constants.js';

class ElementClick extends Component {
    constructor (props){
        super(props);
        this.state = {
          show: false
        };
    }

    componentWillMount (){
        window.document.addEventListener(EVENT_CLICK_WINDOW, this.handleClick.bind(this), false);
    }

    componentWillUnmount (){
        window.document.removeEventListener(EVENT_CLICK_WINDOW, this.handleClick.bind(this), false);
    }

    handleClick (e) {
        e.preventDefault();
        const {appearElement, child} = this.refs;
        const {show} = this.state;
        if (appearElement && child){
            const hasElem = appearElement.contains(e.target);
            const _child = ReactDOM.findDOMNode(child);
            const notChild = !_child.contains(e.target);
            if (show && notChild && !hasElem) {
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
                <div className={cls} ref={REF_APPEAR_ELEMENT}>
                    {element}
                </div>
            );
        } else {
            return null;
        }
    }

    handleOnWrapperClick (e) {
        const {show} = this.state;
            this.setState({
                show: !show
            });
        e.stopPropagation();
    }

    renderChildren () {
        const {show} = this.state;
        const {theme} = this.props;
        return React.Children.map(this.props.children, (child, i) => {
            const icon = (<IconButton icon={!show ? ICON_ARROW_DROP_DOWN : ICON_ARROW_DROP_UP}/>);
            const el = React.cloneElement(child);
            return React.createElement(DIV, {
                key: DIV_KEY + '_' + i,
                ref: REF_CHILD,
                className: theme.child,
                onClick: this.handleOnWrapperClick.bind(this)
            }, el, icon);
        });
    }

    render (){
        const {theme} = this.props;
        const {show} = this.state;
        return (
            <div className={theme.wrapper}>
                {this.renderChildren()}
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
    position: DEFAULT_POSITION
};

export default ElementClick;
