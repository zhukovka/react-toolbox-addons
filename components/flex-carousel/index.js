import { themr } from 'react-css-themr';
import FlexCarousel from './FlexCarousel.js';
import theme from './theme.scss';
import {FLEXCAROUSEL} from '../identifiers.js';

const ThemedFlexCarousel = themr(FLEXCAROUSEL, theme)(FlexCarousel);
export default ThemedFlexCarousel;
export {ThemedFlexCarousel as FlexCarousel};
