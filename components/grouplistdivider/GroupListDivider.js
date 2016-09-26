import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import {GROUPLISTDIVIDER} from '../identifiers';
// import classnames from 'classnames';
const GroupListDivider = ({theme}) => {
    return (<hr className={theme.divider}/>);
};
GroupListDivider.propTypes = {
    theme: PropTypes.object
};
const factory = () => GroupListDivider;
export default themr(GROUPLISTDIVIDER)(GroupListDivider);
export {factory as GroupListDividerFactory};
export {GroupListDivider};
