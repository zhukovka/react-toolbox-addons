import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import {
    SLIDER_CONTAINER,
    SLIDER_INNER_CONTAINER,
    SLIDER_ITEM,
    CONTROL_NEXT,
    CONTROL_PREV,
    ICON_LEFT,
    ICON_RIGHT,
    SIZE_XS,
    SIZE_SM,
    SIZE_MD,
    SIZE_LG
} from './contants.js';
import Button from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import classnames from 'classnames';

class SliderComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            _step: 0
        };
    }
    static calculateBreakpoint (offsetWidth){
        if (offsetWidth < SIZE_XS) {
            return 2;
        } else if (offsetWidth < SIZE_SM && offsetWidth > SIZE_XS) {
            return 3;
        } else if (offsetWidth < SIZE_MD && offsetWidth > SIZE_SM){
            return 5;
        } else if (offsetWidth < SIZE_LG && offsetWidth > SIZE_MD) {
            return 7;
        } else {
            return 9;
        }
    }
    handleResize (e) {
        const _container = ReactDOM.findDOMNode(this.refs.sliderContainer);
        if (_container){
            const _width = _container.offsetWidth - 20;
            this.setState({
                containerWidth: _width,
                showSlides: SliderComponent.calculateBreakpoint(_width)
            }, ()=>{
                console.log(_container.offsetWidth);
            });
        }
    }

    componentDidMount () {
        window.addEventListener('resize', this.handleResize.bind(this));
        const _container = ReactDOM.findDOMNode(this.refs.sliderContainer);
        if (_container){
            const _width = _container.offsetWidth - 20;
            this.setState({
                containerWidth: _width,
                showSlides: SliderComponent.calculateBreakpoint(_width)
            }, ()=>{
                console.log(_container.offsetWidth);
            });
        }
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }
    _getItems (index){
        const {children} = this.props;
        //const _array = this.items;
        const _showSlides = this.state.showSlides;
        let newArray = [];
        for (let i = (index * _showSlides), len = children.length; i < len && newArray.length < _showSlides; i++){
            newArray = newArray.concat(children[i]);
        }
        return newArray;
    }

    _checkStepChange (newStep){
        const {children} = this.props;
        const {showSlides} = this.state;
        const _itemsLength = children.length;
        return !(newStep > Math.floor(_itemsLength / showSlides) || newStep < 0);
    }

    onNext (){
        const _check = this._checkStepChange(this.state._step + 1);
        if (_check){
            this.setState({
                _step: (this.state._step + 1)
            });
        } else {
            this.setState({
                _step: 0
            });
        }
    }

    onPrev (){
        const {children} = this.props;
        const _check = this._checkStepChange(this.state._step - 1);
        if (_check){
            this.setState({
                _step: (this.state._step - 1)
            });
        } else {
            this.setState({
                _step: (Math.floor(children.length / this.state.showSlides))
            });
        }
    }

    renderControlNext (){
        const {children, theme} = this.props;
        const {showSlides, _step} = this.state;
        const _itemsLength = children.length;
        if ((_step < Math.floor(_itemsLength / showSlides))){
            return (
                <FontIcon value={ICON_RIGHT} onClick={this.onNext.bind(this)} className={theme[CONTROL_NEXT]}/>
            );
        }
    }
    renderControlPrev (){
        const {theme} = this.props;
        const {_step} = this.state;
        if (_step > 0){
            return (
                <FontIcon value={ICON_LEFT} onClick={this.onPrev.bind(this)} className={theme[CONTROL_PREV]}/>
            );
        }
    }

    render () {
        const {theme} = this.props;
        const _items = this._getItems(this.state._step);
        const _itemWidth = () => {
            const {containerWidth, showSlides} = this.state;
            const _width = Math.floor(containerWidth / showSlides);
            return {
                width: `${_width - 20}px`
            };
        };
        const sliderContainerCSSClasses = classnames(theme[SLIDER_CONTAINER], {
           [theme['slider-borderLeft']]: this.state._step === 0
        });
        return (
            <div className={sliderContainerCSSClasses} ref='sliderContainer'>

                <div className={theme[SLIDER_INNER_CONTAINER]}>
                    {_items.map((el, index)=>(
                        <div key={index} className={theme[SLIDER_ITEM]} style={_itemWidth()}>
                            {el}
                        </div>
                    ))}
                </div>
                    {this.renderControlPrev()}
                    {this.renderControlNext()}
            </div>
        );
    }
}

SliderComponent.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.object
};

export default SliderComponent;
