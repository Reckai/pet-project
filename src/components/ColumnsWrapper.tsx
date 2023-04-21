import React from 'react';
import Column from './IssuesColumn/Column';

type Props = {};

const ColumnsWrapper = (props: Props) => {
  return (
    <>
      <Column title="TODO" status="open" />
      <Column title="In Progress" status={'inProgress'} />
      <Column title="Done" status={'closed'} />
    </>
  );
};

export default ColumnsWrapper;
