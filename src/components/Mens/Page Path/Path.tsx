import styles from './Path.module.scss';
import { useTheme } from '@/components/ThemeContext';
import React from 'react';

const Path = ({prevPath, currentPath}:{prevPath:any, currentPath:any}) => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.path} ${theme==='dark'?styles.darkPath:''}`}>
      <p>{prevPath} <span>{currentPath}</span></p>
    </div>
  )
}

export default Path