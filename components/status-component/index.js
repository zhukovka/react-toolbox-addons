import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {StatusComponent} from './StatusComponent';
import {CSS_CLASS_STATUS_COMPONENT} from './constants';

const _StatusComponent = themr(CSS_CLASS_STATUS_COMPONENT, theme)(StatusComponent);
export {_StatusComponent as StatusComponent};
