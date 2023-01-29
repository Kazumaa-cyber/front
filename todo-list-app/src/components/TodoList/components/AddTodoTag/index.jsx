import React, { useEffect, useState } from "react";
import styles from "./index.module";
import { SketchPicker } from "react-color";

const AddTodoTag = ({ onChange, onCancelTag }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [color, setColor] = useState("#aaa");
  const [name, setName] = useState("");

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

  return (
    <div className={styles.container}>
      <div>
        <label>
          Tag:{" "}
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
          <SketchPicker color={color} onChange={handleChange} />
        ) : null}
      </div>
    </div>
  );
};

export default AddTodoTag;
