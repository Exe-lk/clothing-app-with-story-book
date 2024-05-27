'use client';

import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import styles from './Slider.module.scss';
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";

const Slider = () => {
  const {theme, toggleTheme} = useTheme();
  // const [darkTheme, setDarkTheme] = useState(false);

  return (
    
    <label className={styles.switch} >
      {theme==='light'?<FaRegMoon onClick={toggleTheme} className={styles.toggleIcon}/>:<FaRegSun onClick={toggleTheme} className={styles.toggleIcon}/>}
    </label>

  )
}

export default Slider