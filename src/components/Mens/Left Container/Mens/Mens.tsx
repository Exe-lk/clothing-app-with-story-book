'use client';
import styles from './Mens.module.scss';
import { collectionList } from './MensCollection';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Mens = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.mens} ${theme==='dark'?styles.darkMens:''}`}>
      <p>men's (5123)</p>
      <ul>
        {
          collectionList.map((i)=>{
            return(
              <li>{i.item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Mens