import React, { FC } from 'react';
import styles from './index.module.scss';

interface IStatLabelProps {
  title: string;
  subtitle: string;
  subtitleBgColor: string;
}

const StatLabel: FC<IStatLabelProps> = ({
  title,
  subtitle,
  subtitleBgColor,
}) => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.subTitle}
        style={{
          // @ts-ignore
          '--subtitle-background': subtitleBgColor,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default StatLabel;
