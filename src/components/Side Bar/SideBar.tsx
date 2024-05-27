'use client'
import styles from './SideBar.module.scss';
import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { CgComponents } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { PiCardsBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { useTheme } from '../ThemeContext';
import Slider from './Switch/Slider';
import Link from 'next/link';

const SideBar = () => {
  const [active, setActive] = useState(false);
  const {theme} = useTheme();

  return (
    <nav className={`${styles.sideBar} ${theme==='dark'?styles.darkSideBar:''}`}>
      <div  className={`${styles.sideBarInner} ${active?styles.open:''}`}>
        <header className={styles.sideBarHeader}>
          <button className={styles.headerButton} onClick={()=>{setActive(!active)}}>
            {
              active==false?<CiMenuBurger className={styles.headerLogo}/>:<IoMdClose className={styles.headerLogo}/>
            }    
          </button>

          
        </header>
        <nav className={styles.sideBarMenu}>
          <button className={styles.sideBarLink}>
            <Slider />
          </button>
          <Link href='/' className={styles.sideBarLink}>
            <CiHome className={styles.sideBarLogo}/>
            <span>Home</span>
          </Link>
          <Link href='/components' className={styles.sideBarLink}>
            <CgComponents className={styles.sideBarLogo}/>
            <span>Components</span>  
          </Link>
          <Link href='/' className={styles.sideBarLink}>
            <PiCardsBold className={styles.sideBarLogo}/>
            <span>Cards</span>
          </Link>
        </nav>
      </div>
    </nav>
  )
}

export default SideBar