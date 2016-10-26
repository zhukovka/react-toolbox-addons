import { themr } from 'react-css-themr';
import FlexCarousel from './FlexCarousel.js';
import theme from './theme.scss';

const ThemedFlexCarousel = themr('flexCarousel', theme)(FlexCarousel);
export default ThemedFlexCarousel;
export {ThemedFlexCarousel as FlexCarousel};

