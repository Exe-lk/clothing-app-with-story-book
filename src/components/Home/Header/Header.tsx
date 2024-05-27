'use client';
import React from 'react';
import SearchBar from './Search/SearchBar';
import MainHeading from './Heading/MainHeading';
import NewArrivals from './Arrivals/NewArrivals';
import styles from './Header.module.scss';
import { useTheme } from '../../ThemeContext';
// className={`${styles.header} ${theme==='dark' ? styles.darkHeader : styles.darkHeader}`}

const Header = () => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.header} ${theme==='dark' ? styles.darkHeader : ''}`}
    >
      <SearchBar />
      <MainHeading />
      <NewArrivals />
    </div>

  )
}

export default Header