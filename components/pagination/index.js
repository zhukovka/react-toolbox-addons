import { themr } from 'react-css-themr';
import TableWithPagination from './TableWithPagination.js';
import {TABLE_WITH_PAGINATION} from '../identifiers.js';
import theme from './theme.scss';

const ThemedTableWithPagination = themr(TABLE_WITH_PAGINATION, theme)(TableWithPagination);
export default ThemedTableWithPagination;
export { ThemedTableWithPagination as TableWithPagination };
