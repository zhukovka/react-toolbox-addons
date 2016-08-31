import {StreamPanel} from './StreamPanel';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {CSS_STREAM_PANEL} from './constants';

const _StreamPanel = themr(CSS_STREAM_PANEL, theme)(StreamPanel);
export {_StreamPanel as StreamPanel};
