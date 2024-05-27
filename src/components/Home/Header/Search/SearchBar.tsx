import styles from './SearchBar.module.scss';
import React from 'react';
import Image from 'next/image';
import search from '../../../../public/search.svg';
import { Montserrat } from 'next/font/google';
import { useTheme } from '@/components/ThemeContext';
import { CiSearch } from "react-icons/ci";

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-montserrat',
  })
  
const SearchBar = () => {
    const {theme} = useTheme();
    return(
        <div className={`${styles.searchBar} ${theme==='dark' ? styles.darkSearchBar : styles.searchBar}`}>
            <input className={montserrat.variable} type="text" placeholder='Search Products' />
            {/* <Image src={search} alt="My SVG" width={24} height={24} className={styles.searchIcon}/> */}
            <CiSearch className={styles.searchIcon}/>
        </div>
    )
}

export default SearchBar