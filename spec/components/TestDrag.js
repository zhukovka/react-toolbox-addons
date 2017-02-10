import React from 'react';
import {DraggableListItem, DraggableList} from '../../components/draggable';

const TestDrag = () => {
  return (
    <DraggableList >
    <DraggableListItem
    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
    caption='Dr. Manhattan # 1'
    legend='somethis ##'
    ripple={false} selectable={false}
    rightIcon='star'
    group="owner"
    />
    <DraggableListItem
    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
    caption='Dr. Manhattan # 2'
    legend='somethis'
    ripple={false} selectable={false}
    rightIcon='star'
    group="owner"
    />
    <DraggableListItem
    caption='Dr. Manhattan # 3'
    legend='somethis'
    ripple={false} selectable={false}
    rightIcon='star'
    group="owner"
    />
    </DraggableList>
  );
};

export default TestDrag;
