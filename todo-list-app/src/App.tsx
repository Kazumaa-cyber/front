import React, { FC, useEffect, useState } from 'react';
import styles from './App.module.scss';

interface TodoTag {
  name: string;
  color?: string;
}

interface TodoItem {
  isComplete: boolean;
  title: string;
  tags: TodoTag[];
}

const App: FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/todoItems.json')
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>React App</h1>
      <div>Project build by @youxian/cli</div>
    </div>
  );
};

export default App;
