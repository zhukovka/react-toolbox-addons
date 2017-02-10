import React from 'react';
import {DraggableListItem, DraggableList} from '../../components/draggable';
import {List} from 'react-toolbox/lib/list';

const TestDrag = () => {
  const data = [];

  return (
    <DraggableList >
    <DraggableListItem
    avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
    caption='Dr. Manhattan # 1'
    legend='somethis ##'
    ripple={false} selectable={false}
    rightIcon='star'
    group="owner"

    // draggable={true}

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
    // avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
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
//
// avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
// caption='Dr. Manhattan'
// ripple={false} selectable={false}
// itemContent={<ListItemDropDownContent title={'Dr. Manhattan'} source={countries} onChange={(e) => {
//  console.log(e.currentTarget.value);
// }} selected={countries[0].value}/>}
// rightIcon='star'
// group="owner"
