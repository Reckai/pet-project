import React from 'react';
import { useSelector } from 'react-redux';
import { selectIssuesData } from '../../redux/issuesSlice/selectors';
import IssueItem from '../Issue/IssueItem';
import { CardProps } from '../Issue/IssueItem';
import { useAppDispatch } from '../../redux/store';
import { useDrop } from 'react-dnd';

import styles from './Column.module.scss';

import { moveCard } from '../../redux/issuesSlice/slice';

interface Props {
  title: string;
  status: string;
}

const Column = ({ title, status }: Props) => {
  const dispatch = useAppDispatch();
  const allBoards = useSelector(selectIssuesData);
  const desiredBoard = allBoards.boards.filter((board) => board.title === status);

  const [{ isOver }, drop] = useDrop({
    accept: 'ISSUE',

    drop: (item: CardProps, monitor) => {
      if (item.id === desiredBoard[0].id) return;
      dispatch(
        moveCard({
          toBoard: desiredBoard[0].id,
          fromBoard: item.id,
          card: item.card,
        }),
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const issues = desiredBoard[0].cards.map((card) => (
    <IssueItem id={desiredBoard[0].id} key={card.issue.number} card={card} />
  ));

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.column} ref={drop}>
        {desiredBoard[0].cards.length !== 0 ? issues : <div></div>}
      </div>
    </div>
  );
};

export default Column;
