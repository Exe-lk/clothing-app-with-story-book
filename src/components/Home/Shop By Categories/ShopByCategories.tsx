'use client';

import styles from './ShopByCategories.module.scss';
import Image from 'next/image';
import forWomens from '../../../../public/forWomens.svg';
import forMens from '../../../../public/forMens.svg';
import rightArrow2 from '../../../../public/rightArrow2.svg';
import forKids from '../../../../public/forKids.svg';
import React from 'react';
import { useTheme } from '../../ThemeContext';

const ShopByCategories = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.shopByCategories} ${theme==='dark' ? styles.darkShopByCategories : ''}`}>
      <h1>shop by categories</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className={styles.content}>

        <div className={styles.left}>
          <p className={styles.heading}>for women’s</p>
          <ul>
            <li>dresses</li>
            <li>sarees</li>
            <li>t-shirts and blouses</li>
            <li>jackets & coats</li>
            <li>jeans</li>
            <li>knit</li>
          </ul>
          <button className={styles.showMore}>
            show more
            <Image src={rightArrow2} alt="rightArrow2" className={styles.rightArrow2} />
          </button>
          
          <Image src={forWomens} alt="forWomens" className={styles.icon1} />
        </div>
        <div className={styles.right}>

          <div className={styles.top}>
            <p className={styles.heading}>for men’s</p>
            <ul>
              <li>t-shirts & shirts</li>
              <li>jeans</li>
              <li>jacket & coats</li>
              <li>shorts</li>
            </ul>
            <button className={styles.showMore}>
              show more
              <Image src={rightArrow2} alt="rightArrow2" className={styles.rightArrow2} />
            </button>
            
            <Image src={forMens} alt="forMens" className={styles.icon2} />
          </div>
          <div className={styles.bottom}>
            <p className={styles.heading}>for kids</p>
            <ul>
              <li>t-shirts & shirts</li>
              <li>jeans</li>
              <li>jacket & coats</li>
              <li>shorts</li>
            </ul>
            <button className={styles.showMore}>
              show more
              <Image src={rightArrow2} alt="rightArrow2" className={styles.rightArrow2} />
            </button>
            
            <Image src={forKids} alt="forKids" className={styles.icon3} />
          </div>
       
        </div>
      </div>

    </div>
  )
}

export default ShopByCategories