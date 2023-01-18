import React, { useEffect, useState } from "react";
import ColorItem from "../AddItem/components/ColorItem/index";

import styles from "./index.module";

const AddItem = (addTag) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [typeText, setText] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleColor(color){
    console.log("here",color)
    setColor(color)
  }

  return (
    <div className={styles.allEl}>
      <div className={styles.titleContainer}>
        <input
          type="text"
          value={title}
          className={styles.titleCtx}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <ColorItem updateColor={handleColor}></ColorItem> 
      </div>

      <div>
        <button>cancel</button>
        <button>confirm</button>
      </div>
    </div>
  );
};

export default AddItem;
