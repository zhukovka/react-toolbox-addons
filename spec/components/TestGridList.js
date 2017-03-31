import React from 'react';
import FlexList from '../../components/flexlist';
import GridItem from '../../components/grid-item';

const mockData = [
    {
        icon: 'folder',
        title: 'one',
        selected: true,
        master: false
    },
    {
        icon: 'folder',
        title: 'two',
        selected: false,
        master: true
    }
];

const TestGridList = () => {
    return (
      <FlexList wrap={true} >
          {mockData.map((el, idx) => {
              return (<GridItem key={idx + '-gridItem'} title={el.title} icon={el.icon} selected={el.selected} master={el.master}/>);
          })}
      </FlexList>
    );
};
export default TestGridList;

