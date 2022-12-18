import React, { FC } from 'react';
import { render } from 'react-dom';

import styles from './index.module.scss';


const RedCode= ({content})=>{
    return(<div className={styles.borderStyle}>
        <div className={styles.icon}>🏎️</div>
        <div className={styles.text}>{content}</div>
    </div>);
}

export default RedCode;