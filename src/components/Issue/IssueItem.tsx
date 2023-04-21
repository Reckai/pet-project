import React from 'react';
import { IIssue } from '../../redux/issuesSlice/types';
import { GetDate } from '../../utils/dataFormatMath';

import styles from './IssueItem.module.scss';

const IssueItem = ({ title, number, state, created_at, user, comments }: IIssue) => {
  console.log(GetDate('2023-04-12T21:23:16Z'));
  console.log(GetDate(created_at));
  console.log(created_at);

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <p>
        #{number} {state} {GetDate(created_at)} days ago
      </p>
      <p>
        {user.login}
        <span> | </span> Comments : {comments}
      </p>
    </div>
  );
};

export default IssueItem;
