import React from 'react';
import { CardState } from '../../redux/issuesSlice/types';
import { GetDate } from '../../utils/dataFormatMath';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';

import styles from './IssueItem.module.scss';
import { useAppDispatch } from '../../redux/store';
import { moveItems } from '../../redux/issuesSlice/slice';

export type CardProps = {
  id: number;
  card: CardState;
};

const IssueItem = ({ id, card }: CardProps) => {
  const { title, number, state, created_at, user, comments } = card.issue;
  const dispatch = useAppDispatch();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'ISSUE',
    drop: (item: CardProps, monitor: DropTargetMonitor) => {
      const draggedId = item.card.id;
      const dropIndex = card.id;

      const sourseColumn = item.id;
      const targetColumn = id;

      if (draggedId === dropIndex && sourseColumn === targetColumn) {
        return;
      }
      if (sourseColumn !== targetColumn) {
        return;
      }
      dispatch(moveItems({ dragIndex: draggedId, dropIndex: dropIndex, boardId: id }));
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop,
      isOver: monitor.isOver(),
    }),
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: 'ISSUE',
    item: { id: id, card: card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drop} className={styles.container} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div ref={dragRef}>
        <p>{title}</p>
        <p>
          #{number} {state} {GetDate(created_at)} days ago
        </p>
        <p>
          {user.login}
          <span> | </span> Comments : {comments}
        </p>
      </div>
    </div>
  );
};

export default IssueItem;
