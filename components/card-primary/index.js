import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {CARD_PRIMARY} from '../identifiers.js';
import {CardPrimary} from './CardPrimary';

const _CardPrimary = themr(CARD_PRIMARY, theme)(CardPrimary);
export {_CardPrimary as CardPrimary};
