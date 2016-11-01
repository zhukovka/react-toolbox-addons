import AsideWrapper from './AsideWrapper.js';
import {themr} from 'react-css-themr';
import theme from './theme.scss';

const ThemedAsideWrapper = themr('wrapper', theme)(AsideWrapper);

export {ThemedAsideWrapper as AsideWrapper};
export default ThemedAsideWrapper;

