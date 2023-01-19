import React, { useEffect, useState } from 'react';
import TodoTag from '../../../TodoTag';
import styles from './index.module.scss';

// interface TodoTag {
//   isComplete:boolean
//   name: string;
//   color?: string;
// }

const TodoItem = ({ todoItem, onIsCompleteChange }) => {
  // const todoItem = todoList[i]
  function handleChange() {
    const newIsComplete = !todoItem.isComplete;
    onIsCompleteChange(newIsComplete);
    // todoList[i].isComplete = newIsComplete;
  }

  return (
    <div className={styles.RowContainer}>
      <label>
        <input
          type="checkbox"
          checked={todoItem.isComplete}
          className={styles.checkStyle}
          onChange={handleChange}
        />
      </label>
      <div className={styles.titleStyle}>{todoItem.title}</div>
      {todoItem.tags.map((tag, i) => (
        <TodoTag key={`${tag}-${i}`} tag={tag} />
      ))}
    </div>
  );
};

export default TodoItem;
