import React, { FC } from 'react';

import styles from './index.module.scss';

interface IParagraphProps {
  title: string;
  subtitle: JSX.Element;
  content: JSX.Element;
}

const Paragraph: FC<IParagraphProps> = ({ title, subtitle, content }) => {
  const href = `#${title.toLowerCase()}`;

  return (
    <div className={styles.container}>
      <h2>
        <a href={href}>{title}</a>
        <a href={href} className={styles.hash}>
          #
        </a>
      </h2>

      <div className={styles.titleUndreline}></div>
      {subtitle}
      {content}
    </div>
  );
};

export default Paragraph;
