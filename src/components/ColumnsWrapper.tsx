import React from 'react';
import Column from './IssuesColumn/Column';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ColumnsWrapper: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Column title="TODO" status="open" />
      <Column title="In Progress" status={'in progress'} />
      <Column title="Done" status={'closed'} />
    </DndProvider>
  );
};

export default ColumnsWrapper;
