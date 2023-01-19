import React, { FC, useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';
import styles from './index.module';
import { useTodoList } from './hooks/useTodoList';

const TodoList = () => {
  const [title, setTitle] = useState('first');
  const [todoList, setTodoList] = useTodoList();
  console.log('todoList', todoList);

  const [addItemVisible, setAddItemVisible] = useState(false);

  function openAdd() {
    setAddItemVisible(true);
  }

  function addItem(item) {
    console.log('item', item);
    setTodoList([...todoList, item]);
  }

  return (
    <div className={styles.itemContainer}>
      <div>
        <h3>{title}</h3>
      </div>

      <div className={styles.tagContainer}>
        {todoList.map((todoItem, i) => {
          return (
            <TodoItem
              key={i}
              todoItem={todoItem}
              onIsCompleteChange={(isComplete) => {
                const newList = todoList.slice();
                newList[i] = {
                  ...todoList[i],
                  isComplete,
                };
                setTodoList(newList);
              }}
            />
          );
        })}
      </div>
      {addItemVisible ? (
        <AddItem
          onAddItem={(item) => {
            addItem(item);
            setAddItemVisible(false);
          }}
          onCancel={() => {
            setAddItemVisible(false);
          }}
        />
      ) : null}

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
