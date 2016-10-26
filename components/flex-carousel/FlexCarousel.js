import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class FlexCarousel extends Component{
    static propTypes = {
        children: PropTypes.array,
        theme: PropTypes.object
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
        const container = this.refs.flexContainer;
        const containerWidth = container.offsetWidth;
        const childrenWidth = Array.prototype.map.call(container.children, (el)=>el.offsetWidth).reduce((c, n)=>c + n);
        if (containerWidth < childrenWidth){
            this.setState({
                showControls: true
            });
        }
    }
    isSet (){
        const container = this.refs.flexContainer;
        const {theme} = this.props;
        container.classList.remove(theme.isSet);
        setTimeout(()=>{
            container.classList.add(theme.isSet);
        }, 50);
    }
    next (newVal){
        if (this.props.children[newVal]){
            this.setState({
                active: newVal,
                reverse: false
            }, this.isSet);
        } else {
            this.setState({
                active: 0,
                reverse: false
            }, this.isSet);
        }
    }
    prev (newVal){
        if (this.props.children[newVal]){
            this.setState({
                active: newVal,
                reverse: true
            }, this.isSet);
        } else {
            this.setState({
                active: this.props.children.length - 1,
                reverse: true
            }, this.isSet);
        }
    }

    renderNextControl (){
        if (this.state.showControls) {
            const {active} = this.state;
            const {theme} = this.props;
            const controlCls = classnames(theme.control, theme.nextControl, 'material-icons');
            return <i className={controlCls} onClick={(e)=>this.next(active + 1)}>
                keyboard_arrow_right</i>;
        }
    }
    renderPrevControl (){
        if (this.state.showControls){
            const {active} = this.state;
            const {theme} = this.props;
            const controlCls = classnames(theme.control, theme.prevControl, 'material-icons');
            return <i className={controlCls} onClick={(e)=>this.prev(active - 1)}>
                keyboard_arrow_left</i>;
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
        }, theme.isSet);
        return (
            <div className={theme.wrapper}>
                <ul className={cls} ref="flexContainer">
                    {this.renderItems(children)}
                </ul>
                {this.renderPrevControl()}
                {this.renderNextControl()}

            </div>
        );
    }
}

export default FlexCarousel;

