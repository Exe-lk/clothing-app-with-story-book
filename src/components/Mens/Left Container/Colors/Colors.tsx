'use client';
import styles from './Colors.module.scss';
import React from 'react';
import { colorsLi } from './ColorsList';
import { useTheme } from '@/components/ThemeContext';

const Colors = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.colors} ${theme==='dark'?styles.darkColors:''}`}>
      <p>colors</p>
      <div className={styles.colorsList}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Colors