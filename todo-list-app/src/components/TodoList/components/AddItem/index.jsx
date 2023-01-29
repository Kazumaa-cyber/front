import React, { useEffect, useState } from 'react';
import AddTodoTag from '../AddTodoTag/index';

import styles from './index.module';

const AddItem = ({ onCancel, onAddItem }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [typeText, setText] = useState('');
  const [tags, setTags] = useState([{}]);

  const handleTagChange = (tag, i) => {
    console.log(`handleTagChange ${i}`, tag);
    // const newTags = [...tags];
    const newTags = tags.slice();
    newTags[i] = tag;
    setTags(newTags);
  };

  function onAddTag(){
    const newTags = tags.slice();
    const length = tags.length;
    console.log(length)
    newTags[length]={}
    setTags(newTags)
  }

  function handleTagCancel(i){
    console.log(`handleTagChange ${i}`,i)
    console.log(`here`,tags)
    let newTags = tags.slice();
    let result = newTags.splice(i,1);
    console.log(`here`,newTags)
    setTags(newTags);
  }

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
              onCancelTag = {()=>handleTagCancel(i)}
            ></AddTodoTag>
          ))}
        </div>

        <div className={styles.tagChange}>
          <div onClick={onAddTag}>
            +
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <div onClick={onCancel}>cancel</div>
          <div onClick={() => {
              onAddItem({ isComplete: false, title, tags });
            }}>
              confirm

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
