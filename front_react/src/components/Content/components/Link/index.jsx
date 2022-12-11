import React from 'react';

import styles from './index.module.scss';

const Link = ({ href, text }) => {
  return (
    <li className={styles.link} href={href}>
      {text}
    </li>
  );
};

export default Link;
