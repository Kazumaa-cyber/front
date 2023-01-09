import React, { useState } from 'react';

import styles from './index.module.scss';

// interface IParagraphProps {
//   title: string;
//   subtitle: JSX.Element;
//   content: JSX.Element;
// }

const Paragraph= ({ title, subtitle, content }) => {
  const href = `#${title.toLowerCase()}`;

  const [isOpen,setOpen] = useState(false);

  function lenChange(){
    setOpen(!isOpen)
  }


  return (
    <div  className={styles.container} >
      <h2 onClick={lenChange}>
        <a href={href}>{title}</a>
        <a href={href} className={styles.hash}>
          #
        </a>
      </h2>

      <div className={styles.titleUndreline}></div>
      {subtitle}
      <div className={styles.secondTitle+(isOpen? "":styles.active)}>{content}</div>
    </div>
  );
};

export default Paragraph;
