import React, { FC, useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';
import styles from './index.module';

const TodoList = () => {
  const [title, setTitle] = useState('first');
  const [tags, setTags] = useState([
    { name: 'hello', color: 'yellow' },
    { name: 'hi', color: 'blue' },
  ]);
  const [isAdd, setAdd] = useState(false);

  function openAdd() {
    setAdd(!isAdd);
  }

  function AddTag(event) {
    //setTags([...tags+event.target.value]);
  }

  return (
    <div className={styles.itemContainer}>
      <div>
        <h3>{title}</h3>
      </div>

      <div className={styles.tagContainer}>
        {tags.map(({ name, color }) => {
          return <TodoItem key={name} initName={name} initColor={color} />;
        })}
      </div>
      <div>
        {isAdd ? (
          <div className={styles.addContainer}>
            <AddItem addTag={AddTag} />
          </div>
        ) : null}
      </div>

      <div className={styles.footer}>
        <div>module</div>
        <div className={styles.addBtn} onClick={openAdd}>
          + Add an item
        </div>
      </div>
    </div>
  );
};

export default TodoList;
