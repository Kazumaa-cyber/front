import React from "react";
import styles from "./index.module.scss";



const HeadTitle = ({ title, subtitle, abstract }) => {
  // const subDescription = {subtitle}
  // handleClick(()=>{
  //   subDescription.textContent = '';
  //   const content = 'Rust-based platform for the Web';
  //   let len = 1;

  //   const next = () => {
  //     if (len < content.length) {
  //       len++;
  //       subDescription.textContent = content.substring(0, len);
  //     setTimeout(next, 300);
  //   }
  // };

  // setTimeout(next, 300);
  // });

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle} >{subtitle}</div>
      <div>
        {abstract.map(({ paragraph }) => (
          <p className={styles.abstract}>{paragraph}</p>
        ))}
      </div>
    </>
  );
};

export default HeadTitle;
