import React from 'react';

import styles from './index.module.scss';

const InlineCode = ({ text }) => {
  return <span className={styles.codeText}>{text}</span>;
};

export default InlineCode;
