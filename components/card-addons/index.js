import {CardTitleButtons} from './CardTitleButtons';
import {CardTitlePrimary} from './CardTitlePrimary';
import {CardMediaPlus} from './CardMediaPlus';
import {themr} from 'react-css-themr';
import theme from './theme.scss';

const _CardTitleButtons = themr('button',theme)(CardTitleButtons);
const _CardTitlePrimary = themr('cardTitle', theme)(CardTitlePrimary);
const _CardMediaPlus = themr('media', theme)(CardMediaPlus);

export {_CardTitleButtons as CardTitleButtons};
export {_CardTitlePrimary as CardTitlePrimary};
export {_CardMediaPlus as CardMediaPlus};
