'use client';

import styles from './NavBar.module.scss';
import React from 'react';
import { useTheme } from '../../ThemeContext';
import Link from 'next/link'

const NavBar = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.navBar} ${theme==='dark' ? styles.darkNavBar : ''}`}>
      <nav>
        <Link href="/" className={styles.link}>home</Link>
        <Link href="/" className={styles.link}>women</Link>
        <Link href="/mens" className={styles.link}>men</Link>
        <Link href="/" className={styles.link}>kids</Link>
        <Link href="/" className={styles.link}>about us</Link>
        <Link href="/" className={styles.link}>contact us</Link>
      </nav>
    </div>
  )
}

export default NavBar;