import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {Slider} from './Slider.js';
import {SLIDER} from './constants';

const _Slider = themr(SLIDER, theme)(Slider);
export {_Slider as Slider};
export default _Slider;
