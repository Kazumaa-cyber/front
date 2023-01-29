import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import AddTodoTag from '../AddTodoTag/index';

import styles from './index.module';

const AddItem = ({ onCancel, onAddItem }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);

  const handleTagChange = (tag, i) => {
    // console.log(`handleTagChange ${i}`, tag);
    // const newTags = [...tags];
    const newTags = tags.slice();
    newTags[i] = {
      ...newTags[i],
      ...tag,
    };
    setTags(newTags);
  };

  useEffect(() => {
    onAddTag();
  }, []);

  function onAddTag() {
    setTags([...tags, { uuid: nanoid() }]);
  }

  function handleTagCancel(i) {
    // console.log(`handleTagChange ${i}`, i);
    // console.log(`here`, tags);
    const newTags = tags.slice();
    newTags.splice(i, 1);
    // console.log(`here`, newTags);
    setTags(newTags);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
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
              key={tag.uuid}
              tag={tag}
              onChange={(tag) => handleTagChange(tag, i)}
              onCancelTag={() => handleTagCancel(i)}
            ></AddTodoTag>
          ))}
        </div>

        <div className={styles.tagChange}>
          <div onClick={onAddTag}>+</div>
        </div>

        <div className={styles.buttonContainer}>
          <div onClick={onCancel}>cancel</div>
          <div
            onClick={() => {
              onAddItem({ isComplete: false, title, tags });
            }}
          >
            confirm
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
