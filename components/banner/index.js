import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {Banner} from './Banner';
import {BANNER} from '../identifiers';

const _Banner = themr(BANNER, theme)(Banner);

export {_Banner as Banner};
export default _Banner;
