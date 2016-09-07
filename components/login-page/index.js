import {themr} from 'react-css-themr';
import theme from './theme.scss';
import LoginPage from './LoginPage.js';
import {LOGIN_PAGE} from './constants.js';

const _LoginPage = themr(LOGIN_PAGE, theme)(LoginPage);

export {_LoginPage as LoginPage};
export default _LoginPage;
