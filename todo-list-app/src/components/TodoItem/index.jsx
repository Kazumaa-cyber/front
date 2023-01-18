import React, { FC, useEffect, useState } from "react";
import TodoTag from "../TodoItem/components/TodoTag/index.jsx";
import AddItem from "./components/AddItem/index.jsx";
import styles from "../TodoItem/index.module";

const TodoItem = () => {
  const [title, setTitle] = useState("first");
  const [tags, setTags] = useState([
    { name: "hello", color: "yellow" },
    { name: "hi", color: "blue" },
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
          return <TodoTag key={name} initName={name} initColor={color} />;
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

export default TodoItem;
