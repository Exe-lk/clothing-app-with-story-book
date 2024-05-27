'use client';
import styles from './Subscribe.module.scss';
import React from 'react';
import { useTheme } from '../../ThemeContext';

const Subscribe = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.subscribe} ${theme==='dark' ? styles.darkSubscribe : ''}`}>
      <div className={styles.left}>
        <p>Subscribe to our newsletter </p>
        <p>LORUM IPSUM DOLLERF!</p>
      </div>
      <div className={styles.right}>
        <input type="text" placeholder='email address' />
        <button>subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe