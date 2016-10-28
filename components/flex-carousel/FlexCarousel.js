import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Button from 'react-toolbox/lib/button';
import {
    WINDOW_RESIZE_EVENT,
    FLEX_CONTAINER_REF,
    BUTTON_ICON_NEXT,
    BUTTON_ICON_PREV
} from './constants.js';

class FlexCarousel extends Component{
    static propTypes = {
        children: PropTypes.array,
        theme: PropTypes.shape({
            wrapper: PropTypes.string,
            container: PropTypes.string,
            isReverse: PropTypes.string,
            customButton: PropTypes.string,
            left: PropTypes.string,
            right: PropTypes.string,
            item: PropTypes.string,
            forTransitionWorks: PropTypes.string
        })
    };

    static getOrderArray (arrLen, activeIndex){
        const arr = [];
        for (let i = 0; i < arrLen; i++){
            if (i < activeIndex){
                arr[i] = arrLen - activeIndex + i + 1;
            } else if (i === activeIndex) {
                arr[i] = 1;
            } else {
                arr[i] = i + 1 - activeIndex;
            }
        }
        return arr;
    }

    constructor (props){
        super(props);
        this.state = {
            active: 0,
            showControls: false,
            reverse: false
        };
    }
    componentDidMount (){
        window.addEventListener(WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
        if (this.calculateWidth()){
            this.setState({
                showControls: true
            });
        }
    }
    componentWillUnmount (){
        window.removeEventListener(WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
    }
    calculateWidth (){
        if (this.refs) {
            const container = ReactDOM.findDOMNode(this.refs.flexContainer);
            if (container) {
                const containerWidth = container.offsetWidth;
                const childrenWidth = Array.prototype.map.call(container.children, (el)=>el.offsetWidth).reduce((c, n)=>c + n);
                return containerWidth < childrenWidth;
            }
        } else {
            return false;
        }
    }
    handleResize (){
        this.setState({
            showControls: this.calculateWidth() ? true : false
        });
    }
    forTransitionWorks (){
        const container = ReactDOM.findDOMNode(this.refs.flexContainer);
        const {theme} = this.props;
        container.classList.remove(theme.forTransitionWorks);
        setTimeout(()=>{
            container.classList.add(theme.forTransitionWorks);
        }, 50);
    }
    next (newVal){
        if (this.props.children[newVal]){
            this.setState({
                active: newVal,
                reverse: false
            }, this.forTransitionWorks);
        } else {
            this.setState({
                active: 0,
                reverse: false
            }, this.forTransitionWorks);
        }
    }
    prev (newVal){
        if (this.props.children[newVal]){
            this.setState({
                active: newVal,
                reverse: true
            }, this.forTransitionWorks);
        } else {
            this.setState({
                active: this.props.children.length - 1,
                reverse: true
            }, this.forTransitionWorks);
        }
    }

    renderControls (){
        const {active, showControls} = this.state;
        if (showControls) {
            const {theme} = this.props;
            const controlsArray = [];
            const prevButtonProps = {
                icon: BUTTON_ICON_PREV,
                className: classnames(theme.customButton, theme.left),
                onClick: (e)=>this.prev(active - 1)
            };
            const nextButtonProps = {
                icon: BUTTON_ICON_NEXT,
                className: classnames(theme.customButton, theme.right),
                onClick: (e)=>this.next(active + 1)
            };
            controlsArray.push(prevButtonProps, nextButtonProps);
            return controlsArray.map((btnProps, index)=>(<Button key={index} flat {...btnProps}/>));
        } else {
            return null;
        }
    }
    renderItems (items = []){
        const {theme, children} = this.props;
        const {active} = this.state;
        const orderList = FlexCarousel.getOrderArray(children.length, active);
        return React.Children.map(items, (el, index)=>{
            return (<li key={index + '_index'} className={theme.item} style={{order: orderList[index]}}>{el}</li>);
        });
    }
    render (){
        const {children, theme} = this.props;
        const cls = classnames(theme.container, {
            [theme.isReverse]: this.state.reverse
        }, theme.forTransitionWorks);
        return (
            <div className={theme.wrapper}>
                <ul className={cls} ref={FLEX_CONTAINER_REF}>
                    {this.renderItems(children)}
                </ul>
                {this.renderControls()}
            </div>
        );
    }
}

export default FlexCarousel;

