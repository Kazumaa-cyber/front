import React, { FC } from 'react';

import { ITodoTag } from '../../../../types/todo';

import styles from './index.module.scss';

interface IProps {
  tag: ITodoTag;
}

const TodoTag: FC<IProps> = ({ tag }) => {
  return (
    // @ts-ignore
    <div className={styles.tag} style={{ '--bg-color': tag.color }}>
      {tag.name}
    </div>
  );
};

export default TodoTag;
