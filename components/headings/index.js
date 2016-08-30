import {redHeadingFactory} from './RedHeading';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {RED_HEADING} from '../identifiers';

const RedHeading = redHeadingFactory();
const ThemedRedHeading = themr(RED_HEADING, theme)(RedHeading);

export {ThemedRedHeading as RedHeading};
