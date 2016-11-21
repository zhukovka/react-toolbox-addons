import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import {
    WINDOW_RESIZE_EVENT,
    BUTTON_ICON_NEXT,
    BUTTON_ICON_PREV
} from './constants.js';
import classnames from 'classnames';
import Button from 'react-toolbox/lib/button';


class FlexScroll extends Component {
    static propTypes = {
        children: PropTypes.array,
        itemWidth: PropTypes.number,
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

    constructor (props){
        super(props);
        this.state = {
          currentIndex: 0
        };
    }

    componentDidMount (){
        window.addEventListener(WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
        const amountOfItems = this.calculateWidth();
        if (!!amountOfItems && amountOfItems > 0){
            this.setState({
                amountOfItems
            });
        }
    }
    componentWillUnmount (){
        window.removeEventListener(WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
    }

    handleResize (){
        this.setState({
            amountOfItems: this.calculateWidth()
        });
    }

    calculateWidth (){
        if (this.refs) {
            const container = ReactDOM.findDOMNode(this.refs.scroll);
            if (container) {
                const containerWidth = container.offsetWidth;
                return Math.floor(containerWidth / this.props.itemWidth);
            }
        } else {
            return false;
        }
    }

    renderControls (){
            const {theme, children} = this.props;
            const {currentIndex, amountOfItems} = this.state;
            const controlsArray = [];
            let nextButtonProps = null;
            let prevButtonProps = null;
            if (currentIndex !== 0) {
                prevButtonProps = {
                    icon: BUTTON_ICON_PREV,
                    className: classnames(theme.customButton, theme.left),
                    onClick: (e)=>this.setState({currentIndex: currentIndex - 1})
                };
                controlsArray.push(prevButtonProps);
            }
            if (amountOfItems + currentIndex < children.length) {
                nextButtonProps = {
                    icon: BUTTON_ICON_NEXT,
                    className: classnames(theme.customButton, theme.right),
                    onClick: (e)=>this.setState({currentIndex: currentIndex + 1})
                };
                controlsArray.push(nextButtonProps);
            }
            return controlsArray.map((btnProps, index)=>(<Button key={index} flat {...btnProps}/>));
    }


    renderItems (items = []){
        const {theme, itemWidth} = this.props;
        const _itemWidth = itemWidth + 'px';
        const ch = React.Children.map(items, (el, index)=>{
                return (<li key={index + '_index'}
                            className={theme.scrollItem}
                            style={{minWidth: _itemWidth, maxWidth: _itemWidth}}>
                    {el}</li>);
        });
        return ch.slice(this.state.currentIndex, this.state.amountOfItems + this.state.currentIndex);

    }
    render (){
        const {children, theme} = this.props;
        return (
            <div className={theme.wrapper} ref="scroll">
                <div className={theme.scrollContainer}>
                    {this.renderItems(children)}
                </div>
                {this.renderControls()}
            </div>
        );
    }
}

export default FlexScroll;
