'use client';

import styles from './Discounts.module.scss';
import React from 'react';
import Image from 'next/image';
import lefttImg from '../../../../public/assets/discounts/leftImg.svg';
import rightImg from '../../../../public/assets/discounts/rightImg.svg';
import rightArrow1 from '../../../../public/rightArrow1.svg';
import { useTheme } from '../../ThemeContext';

const Discounts = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.discounts} ${theme==='dark' ? styles.darkdiscounts : ''}`}>
      <div className={styles.left}>
        <Image src={lefttImg} alt="lefttImg" className={styles.icon1}/>
      </div>
      <div className={styles.middle}>
        <h1> women’s latest fashion</h1>
        <h3>20% discount</h3>
        <button>
          discover now
          <Image src={rightArrow1} alt="rightArrow1" className={styles.rightArrow1} />
        </button>
      </div>
      <div className={styles.right}>
        <Image src={rightImg} alt="rightImg" className={styles.icon2} />
      </div>
    </div>
  )
}

export default Discounts;