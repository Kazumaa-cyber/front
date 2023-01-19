import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

// interface TodoTag {
//   isComplete:boolean
//   name: string;
//   color?: string;
// }

const TodoItem = ({ initName, initColor }) => {
  const [name, setName] = useState(initName);
  const [color, setColor] = useState(initColor);
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    console.log('hello');
  }, []);

  function handleChange() {
    setComplete(!isComplete);
  }

  return (
    <div className={styles.RowContainer}>
      <label>
        <input
          type="checkbox"
          name="isComplete"
          className={styles.checkStyle}
          onClick={handleChange}
        ></input>{' '}
      </label>
      <div className={styles.titleStyle}>hello</div>
      <div className={styles.typeStyle} style={{ '--bg-color': color }}>
        here
      </div>
    </div>
  );
};

export default TodoItem;
