import { themr } from 'react-css-themr';
import TableWithPagination from './TableWithPagination.js';
import theme from './theme.scss';

const ThemedTableWithPagination = themr('TableWithPagination', theme)(TableWithPagination);
export default ThemedTableWithPagination;
export { ThemedTableWithPagination as TableWithPagination };
