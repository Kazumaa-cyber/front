import { useEffect, useState } from 'react';

export const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);
  // const groups: TodoGroup[];

  useEffect(() => {
    fetch('http://localhost:3000/data/todoItems.json')
      .then((res) => res.json())
      .then((res) => {
        setTodoList(res);
      });
  }, []);

  return [todoList, setTodoList];
};
