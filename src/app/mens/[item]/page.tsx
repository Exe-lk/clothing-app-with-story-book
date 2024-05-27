'use client';

import styles from './page.module.scss';
import React from 'react';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import Path from '@/components/Mens/Page Path/Path';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';
import Footer from '@/components/Home/Footer/Footer';

const page = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.itemContainer} ${theme==='dark'?styles.darkItemContainer:''}`}>
      <div className={styles.aside}>
        <SideBar/>
      </div>
      <div className={styles.wrapper}>
        <Header />
        <NavBar />
        <Path prevPath={"home > men's"} currentPath={" > Jobbs over-sized t-shirt"}/>
        <div className={styles.upperContent}>
          <div className={styles.left}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
              <div className={styles.item}></div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.heading}>
              <div className={styles.title}></div>
              <div className={styles.button}></div>
            </div>
            <div className={styles.details}>
              <div className={styles.priceAndDes}>
                <div className={styles.price}></div>
                <div className={styles.des}></div>
              </div>
              <div className={styles.size}></div>
              <div className={styles.colors}></div>
              <div className={styles.materials}></div>
              <div className={styles.addToCart}></div>
              <div className={styles.pay}></div>
            </div>
          </div>
        </div>
        <div className={styles.relatedItems}></div>
        <Footer />
      </div>
    </div>
  )
}

export default page