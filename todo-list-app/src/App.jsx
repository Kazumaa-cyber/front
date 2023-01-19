import React from 'react';
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
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
};

export default App;
