import React, {PropTypes, Component} from 'react';

import {
    SLIDER_CONTAINER,
    SLIDER_ITEMS_CONTAINER,
    SLIDER_ITEM,
    SLIDER_BUTTON_NEXT,
    SLIDER_BUTTON_PREV,
    SLIDER_CONTROLS
} from './constants';

import {Row,Col} from '../../components/grid';

class Slider extends Component {
    static createOrderArray (tar, len){
        const _array = new Array(len);
        for (let i = 0; i < _array.length; i++){
            if (i < tar){
                _array[i] = ((len - tar) + i);
            } else if (i === tar) {
                _array[i] = 1;
            } else {
                _array[i] = (i - tar);
            }
        }
        return _array;
    }
    static defaultProps = {
        count: 1
    };
    static getWidth (count) {
        return {
            width: (100 / count) + '%'
        };
    }
    constructor (props){
        super(props);
        this.state = {
          order: 1,
            current: props.count
        };
    }
    renderChildren (){
        const {theme, children, count} = this.props;
        const {order} = this.state;
        if (children && Array.isArray(children)){
            const orderArray = Slider.createOrderArray(order, children.length);
            const elementWidth = Slider.getWidth(count);
            return children.map((el, index)=>(
                <div key={index}
                     className={theme[SLIDER_ITEM]}
                     style={{
                         order: orderArray[index],
                         width: elementWidth
                     }}
                >
                    {el}
                </div>
            ));
        }
    }

    handleControls (type){
        /*const {order} = this.state;
        const {children} = this.props;
        const childrenLength = children.length;
        let newOrder;
        if (type === SLIDER_BUTTON_NEXT){
            newOrder = (order + 1) > childrenLength ? 1 : (order + 1);
        } else if (type === SLIDER_BUTTON_PREV){
            newOrder = (order - 1) < 1 ? 12 : (order - 1);
        }
        this.setState({
            order: newOrder
        });*/
        let _current;
        if (type === SLIDER_BUTTON_NEXT){
            _current = this.state.current + this.props.count;
        } else if (type === SLIDER_BUTTON_PREV){
            _current = this.state.current - this.props.count;
        }
        this.setState({
            current: _current
        });
    }

    countItems (){
        const {children, count} = this.props;
        const {current} = this.state;
        return children.filter((item, index)=>{
            let _index = index + 1;
            if ((current - count) < (_index) && (_index) <= current){
                return item;
            }
        });
    }
    renderControlPrev (onclick){
        const {count,theme} = this.props;
        const {current} = this.state;
        if (current !== count){
            return (<button className={theme[SLIDER_BUTTON_PREV]}
                    onClick={onclick}
            >{SLIDER_BUTTON_PREV}</button>);
        }
    }
    renderControlNext (onclick){
        const {children, theme} = this.props;
        const {current} = this.state;
        if (current < children.length){
            return (<button className={theme[SLIDER_BUTTON_NEXT]}
                            onClick={onclick}
            >{SLIDER_BUTTON_NEXT}</button>);
        }
    }
    render (){
        const {theme} = this.props;
        const _array = this.countItems();
        return (
            <div className={theme[SLIDER_CONTAINER]}>
                    <Row>
                    {_array.map((el, index)=>(
                        <Col key={index} >
                            <div>
                            {el}
                            <p>{index}</p>
                            </div>
                        </Col>
                        ))}
                    </Row>
                <div className={theme[SLIDER_CONTROLS]}>
                    {this.renderControlPrev(this.handleControls.bind(this, SLIDER_BUTTON_PREV))}
                    {this.renderControlNext(this.handleControls.bind(this, SLIDER_BUTTON_NEXT))}
                </div>
            </div>
        );
    }
}

Slider.propTypes = {
    children: PropTypes.any,
    count: PropTypes.number,
    theme: PropTypes.object
};

export {Slider};
