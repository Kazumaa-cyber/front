import React from 'react';

import styles from './index.module.scss';

const Link = ({ href, text }) => {
  return (
    <li className={styles.link} >
      <a href={href}>{text}</a>
    </li>
  );
};

export default Link;
