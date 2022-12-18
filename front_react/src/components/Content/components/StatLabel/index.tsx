import React, { FC } from 'react';
import styles from './index.module.scss'

interface IStatLabelProps {
  title: string;
  subtitle: string;
  subtitleBgColor: string;
}

const StatLabel: FC<IStatLabelProps> = ({title,subtitle,subtitleBgColor}) => {
  const bgColor = {
    background:`${subtitleBgColor}`
  }
  return <div className={styles.conatiner}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle} style={bgColor}>{subtitle}</div>
  </div>;
};

export default StatLabel;
