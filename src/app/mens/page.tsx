'use client';
import React from 'react';
import styles from './page.module.scss';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import Path from '@/components/Mens/Page Path/Path';
import Heading from '@/components/Mens/Left Container/All Categories/Heading';
import Mens from '@/components/Mens/Left Container/Mens/Mens';
import Sizes from '@/components/Mens/Left Container/Sizes/Sizes';
import Colors from '@/components/Mens/Left Container/Colors/Colors';
import Price from '@/components/Mens/Left Container/Price/Price';
import ShoppingItems from '@/components/Mens/Right Container/ShoppingItems';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';

const page = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.mensContainer} ${theme==='dark'?styles.darkMensContainer:''}`}>
      <div className={styles.aside}>
        <SideBar/>
      </div>
      <div className={styles.wrapper}>
        <Header />
        <NavBar />
        <Path prevPath={'home'} currentPath={">men's"}/>
        <div className={styles.content}>
          <div className={styles.left}>
            <Heading />
            <Mens />
            <Sizes />
            <Colors />
            <Price />
          </div>
          <div className={styles.right}>
            <ShoppingItems />
          </div>
        </div>
      </div>
      </div>
  )
}

export default page