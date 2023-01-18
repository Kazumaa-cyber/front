import React, { useEffect, useState } from "react";
import styles from "./index.module";
import { SketchPicker } from "react-color";

const ColorItem = (updateColor) => {
  const [color, setColor] = useState("");
  const [displayColor, setDisplayColor] = useState(false);
  const [type, setType] = useState("abc");

//   useEffect(()=>{
//     console.log("hereclick",color)
//     updateColor(color)
//   },[displayColor])

  function handleChange(value) {
    console.log(value.hex);
    setColor(value.hex);
  }

  function handleTypeChange(e) {
    setType(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.button}
        onClick={() => setDisplayColor(!displayColor)}
      >
        选择板块样式
      </div>
      <input
        type="text"
        value={type}
        className={styles.typeCtx}
        style={{  background: color }}
        onChange={handleTypeChange}
      />
      <div className={styles.picker}>
        {displayColor ? (
          <SketchPicker color={color} onChange={handleChange} />
        ) : null}
      </div>
    </div>
  );
};

export default ColorItem;
