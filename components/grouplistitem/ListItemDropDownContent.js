import React, {PropTypes} from 'react';
import {themr} from 'react-css-themr';
import Dropdown from 'react-toolbox/lib/dropdown';
import {LIST_ITEM_DROP_DOWN_CONTENT} from '../identifiers.js';
const ListItemDropDownContent = ({title, theme, source, ...other}) => {
  return (
    <div className={theme.listItemContent}>
        <span className={theme.listItemContent_title}>{title}</span>
        <Dropdown className={theme.listItemContent_dropDown} value={source[0].value} source={source} {...other}/>
    </div>
  );
};

ListItemDropDownContent.propTypes = {
    onChange: PropTypes.func,
    source: PropTypes.array,
    theme: PropTypes.object,
    title: PropTypes.string
};
const factory = () => ListItemDropDownContent;
export default themr(LIST_ITEM_DROP_DOWN_CONTENT)(ListItemDropDownContent);
export {factory as ListItemDropDownContentFactory};
export {ListItemDropDownContent};
