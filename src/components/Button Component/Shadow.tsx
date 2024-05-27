import styles from './Shadow.module.scss';
import React, {useState} from 'react';
import { useTheme } from '@/components/ThemeContext';

const Shadow = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.shadow} ${theme==='dark'?styles.darkShadow:''}`}>
      <button className={`${styles.none} ${styles.button}`}>none</button>
      <button className={`${styles.small} ${styles.button}`}>small</button>
      <button className={`${styles.medium} ${styles.button}`}>medium</button>
      <button className={`${styles.large} ${styles.button}`}>large</button>
    </div>
  )
}

export default Shadow