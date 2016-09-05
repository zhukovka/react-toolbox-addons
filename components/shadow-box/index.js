import ShadowBox from './ShadowBox.js';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {SHADOW_BOX} from '../identifiers.js';

const _ShadowBox = themr(SHADOW_BOX, theme)(ShadowBox);

export {_ShadowBox as ShadowBox};
export default _ShadowBox;
