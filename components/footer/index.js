import {Footer} from './Footer';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {FOOTER} from '../identifiers.js';

const _Footer = themr(FOOTER, theme)(Footer);
export {_Footer as Footer};
export default _Footer;
