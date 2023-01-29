import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module';
import { SketchPicker } from 'react-color';
import { useClickOutside } from '../../hooks/useClickOutside';

const AddTodoTag = ({ onChange, onCancelTag }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [color, setColor] = useState('#aaa');
  const [name, setName] = useState('');

  function handleChange(value) {
    const newColor = value.hex;
    setColor(newColor);
    onChange({ name: name, color: newColor });
  }

  function handleTypeChange(e) {
    const newName = e.target.value;
    setName(newName);
    onChange({ name: newName, color });
  }

  const pickerSwitchRef = useRef(null); // { current: xxx }
  const pickerRef = useRef(null); // { current: xxx }
  useClickOutside(pickerVisible, pickerRef, (e) => {
    if (e.target === pickerSwitchRef.current) {
      return;
    }
    setPickerVisible(false);
  });

  return (
    <div className={styles.container}>
      <div>
        <label>
          Tag:{' '}
          <input
            type="text"
            value={name}
            className={styles.typeCtx}
            style={{ background: color }}
            onChange={handleTypeChange}
          />
        </label>
      </div>

      <div
        ref={pickerSwitchRef}
        className={styles.button}
        style={{ background: color }}
        onClick={() => setPickerVisible(!pickerVisible)}
      ></div>
      <div
        className={styles.cancelTag}
        onClick={onCancelTag}
        style={{ background: color }}
      ></div>
      <div className={styles.picker}>
        {pickerVisible ? (
          <div ref={pickerRef}>
            <SketchPicker color={color} onChange={handleChange} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddTodoTag;
