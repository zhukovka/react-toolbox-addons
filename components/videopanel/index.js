import {VIDEOPANEL} from '../identifiers';
import { themr } from 'react-css-themr';
import { videoPanelFactory } from './VideoPanel.js';
import theme from './theme.scss';

const VideoPanel = videoPanelFactory();
const ThemedVideoPanel = themr(VIDEOPANEL, theme)(VideoPanel);

export default ThemedVideoPanel;
export { ThemedVideoPanel as VideoPanel };
