import React, { FC, useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import styles from './App.module.scss';

/**
 * interface TodoItem {
 *   completed: boolean;
 *   title: string;
 *   tags: TodoTag[];
 * }
 */

/**
 * 1.
 * interface TodoGroup {
 *   todoList: TodoItem[]
 * }
 */

/**
 * 2.
 * interface TodoItem {
 *   stages
 *   actions: TodoAction[]
 *   actions: Set<TodoAction>
 * }
 *
 * interface TodoAction {
 *   seq: number;
 *   completed: boolean;
 *   target: string;
 *   tags: TodoTag[];
 * }
 */

/**
 * 3.
 * interface TodoItem {
 *   completed: boolean;
 *   target: string;
 *   tags: TodoTag[];
 *   stages: TodoItem[];
 * }
 */

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  // const groups: TodoGroup[];

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
