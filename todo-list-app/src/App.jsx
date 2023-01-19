import React, { FC, useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import styles from './App.module.scss';

// interface TodoItem {
//   count: int;
//   title: string;
//   tags: TodoTag[];
// }

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/todoItems.json')
      .then((res) => res.json())
      .then((res) => {});
  }, []);

  return (
    <div className={styles.container}>
      <h1>React App</h1>
      <div>Project build by @youxian/cli</div>
      <TodoList></TodoList>
    </div>
  );
};

export default App;
