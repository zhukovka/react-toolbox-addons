import {EditableTitle} from './EditableTitle';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {
    CSS_EDITABLE_TITLE
} from './contants';

const _EditableTitle = themr(CSS_EDITABLE_TITLE, theme)(EditableTitle);
export {_EditableTitle as EditableTitle};
