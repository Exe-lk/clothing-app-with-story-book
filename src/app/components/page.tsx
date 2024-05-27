'use client';

import styles from './page.module.scss';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineSmartButton } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa6";
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';

const page = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.wrapper} ${theme==='dark'?styles.darkWrapper:''}`}>
      <div className={styles.aside}>
        <SideBar />
      </div>
      <div className={styles.componentsWrapper}>
        <div className={styles.searchBar}>
          <CiSearch className={styles.searchIcon}/>
          <input type="text" className={styles.search} placeholder='search...'/>
        </div>
        <div className={styles.components}>
          <div className={styles.component}>
            <Link href='/components/button' className={styles.componentLink}>
              <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span>
            </Link>
          </div>
          <div className={styles.component}>
            <Link href='/components/searchbar' className={styles.componentLink}>
              <FaSearchengin  className={styles.componentIcon}/>
              <span>search bar</span>
              </Link>
          </div>
          <div className={styles.component}>
            <Link href='' className={styles.componentLink}>
              {/* <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span> */}
            </Link>
          </div>
          <div className={styles.component}>
            <Link href='' className={styles.componentLink}>
              {/* <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span> */}
            </Link>
          </div>
          <div className={styles.component}>
            <Link href='' className={styles.componentLink}>
              {/* <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span> */}
            </Link>
          </div>
          <div className={styles.component}>
            <Link href='' className={styles.componentLink}>
              {/* <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span> */}
            </Link>
          </div>
          <div className={styles.component}>
            <Link href='' className={styles.componentLink}>
              {/* <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span> */}
            </Link>
          </div>
          <div className={styles.component}>
            <Link href='' className={styles.componentLink}>
              {/* <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span> */}
            </Link>
          </div>
          <div className={styles.component}>
            <Link href='' className={styles.componentLink}>
              {/* <MdOutlineSmartButton  className={styles.componentIcon}/>
              <span>button</span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page