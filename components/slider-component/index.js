import SliderComponent from './SliderComponent.js';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {SLIDER} from './contants.js';

const _SliderComponent = themr(SLIDER, theme)(SliderComponent);
export {_SliderComponent as SliderComponent};
export default _SliderComponent;
