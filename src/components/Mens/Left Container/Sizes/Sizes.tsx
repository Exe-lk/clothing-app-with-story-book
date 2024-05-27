'use client';
import styles from './Sizes.module.scss';
import { sizesLi } from './SizesList';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Sizes = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.sizes} ${theme==='dark'?styles.darkSizes:''}`}>
      <p>sizes</p>
      <ul>
        {
          sizesLi.map(i=>{
            return(
              // <li>{i.item}</li>
              <div className={styles.range}>
                <input type="radio" id="sizes" name="sizes" />
                <label>{i.item}</label>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sizes