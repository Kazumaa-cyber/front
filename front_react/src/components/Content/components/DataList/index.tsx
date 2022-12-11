import React, { FC } from 'react';

import styles from './index.module.scss';

interface IDataItem {
  title: string;
  description: string | JSX.Element;
}

interface IDataListProps {
  data: IDataItem[];
}

const DataList: FC<IDataListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li className={styles.item}>
          <span className="title">{item.title}</span>
          {item.description ? (
            <span className="description">
              {'('}
              {item.description}
              {')'}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
