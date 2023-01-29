import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import TodoTag from '../TodoTag';
import styles from './index.module.scss';
import { useClickOutside } from '../../hooks/useClickOutside';

// interface TodoTag {
//   isComplete:boolean
//   name: string;
//   color?: string;
// }

const customClassNames = (...names) => {
  return names
    .map((name) => {
      if (typeof name === 'string') return name;
      if (typeof name === 'object' && name !== null) {
        return Object.entries()
          .map(([name, enable]) => {
            if (enable) {
              return name;
            } else {
              return '';
            }
          })
          .join(' ');
      }
      return name;
    })
    .join(' ');
};

const TodoItem = ({ todoItem, onIsCompleteChange }) => {
  const [active, setActive] = useState(false);

  // const todoItem = todoList[i]
  function handleChange() {
    const newIsComplete = !todoItem.isComplete;
    onIsCompleteChange(newIsComplete);
    // todoList[i].isComplete = newIsComplete;
  }

  const containerRef = useRef(null);
  useClickOutside(active, containerRef, () => {
    setActive(false);
  });

  return (
    <div
      ref={containerRef}
      onClick={() => setActive(true)}
      className={classNames(styles.RowContainer, { [styles.active]: active })}
    >
      <div className={styles.leftContainer}>
        <label>
          <input
            type="checkbox"
            checked={todoItem.isComplete}
            className={styles.checkStyle}
            onChange={handleChange}
          />
        </label>
        <div className={styles.titleStyle}>{todoItem.title}</div>
      </div>

      <div className={styles.rightContainer}>
        {todoItem.tags.map((tag, i) => (
          <TodoTag key={`${tag}-${i}`} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
