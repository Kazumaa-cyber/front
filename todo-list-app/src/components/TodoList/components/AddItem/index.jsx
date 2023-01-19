import React, { useEffect, useState } from 'react';
import AddTodoTag from './components/AddTodoTag/index';

import styles from './index.module';

const AddItem = ({ onCancel, onAddItem }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [typeText, setText] = useState('');
  const [tags, setTags] = useState([{}, {}]);

  const handleTagChange = (tag, i) => {
    console.log(`handleTagChange ${i}`, tag);
    // const newTags = [...tags];
    const newTags = tags.slice();
    newTags[i] = tag;
    setTags(newTags);
  };

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleColor(color) {
    console.log('here', color);
    setColor(color);
  }

  return (
    <div className={styles.addContainer}>
      <div className={styles.allEl}>
        <div className={styles.titleContainer}>
          <label>
            Title:{' '}
            <input
              placeholder="Todo title..."
              type="text"
              value={title}
              className={styles.titleCtx}
              onChange={handleTitleChange}
            />
          </label>
        </div>
        <div>
          {tags.map((tag, i) => (
            <AddTodoTag
              key={i}
              tag={tag}
              onChange={(tag) => handleTagChange(tag, i)}
            ></AddTodoTag>
          ))}
        </div>

        <div>
          <button onClick={onCancel}>cancel</button>
          <button
            onClick={() => {
              onAddItem({ isComplete: false, title, tags });
            }}
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
