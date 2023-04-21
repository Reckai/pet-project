import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import {
  selectOpenIssuesData,
  selectInProgressIssuesData,
  selectClosedIssuesData,
} from '../../redux/issuesSlice/selectors';

import IssueItem from '../Issue/IssueItem';

interface Props {
  title: string;
  status: string;
}

const Column = ({ title, status }: Props) => {
  console.log(status);

  const elem = (status: string) => {
    switch (status) {
      case 'open':
        return selectOpenIssuesData;
      case 'inProgress':
        return selectInProgressIssuesData;
      default:
        return selectClosedIssuesData;
    }
  };
  const data = useSelector(elem(status));

  const issues = data.map((issue) => (
    <IssueItem
      title={issue.title}
      number={issue.number}
      state={issue.state}
      created_at={issue.created_at}
      user={issue.user}
      comments={issue.comments}
    />
  ));

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.column}>{issues ? issues : <div>loading...</div>}</div>
    </div>
  );
};

export default Column;
