import React from 'react';

import Link from '../Link';

import styles from './index.module.scss';

const LinkList = ({ links }) => {
  return (
    <ul className={styles.linkList}>
      {links.map(({ href, text }) => (
        <Link href={href} text={text} />
      ))}
    </ul>
  );
};

export default LinkList;
