import React from 'react';
import styles from './Arrivals.module.scss';
import Image from 'next/image';
// import heart from '../../../../public/heart.svg';
// import user from '../../../../public/user.svg';
// import cart from '../../../../public/cart.svg';
import arrow from '../../../../../public/arrow.svg';
import { Montserrat } from 'next/font/google';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useTheme } from '@/components/ThemeContext';

const montserrat = Montserrat({
    weight: '500',
    subsets: ['latin'],
    variable: '--font-montserrat',
  })

const NewArrivals = () => {
  return (
    <div className={styles.arrivalsContainer}>
      {/* <Image src={heart} alt='heart' width={24} height={24} className={styles.icon}/>
      <Image src={cart} alt='cart' width={33} height={33} className={styles.icon}/>
      <Image src={user} alt='user' width={28} height={28} className={styles.icon}/> */}
      <CiHeart className={styles.icon}/>
      <IoCartOutline className={styles.icon}/>
      <FaRegUser className={styles.icon}/>
      <button className={`${styles.arrivalsButton} ${montserrat.variable}`}>
        new arrivals
        <Image src={arrow} alt='arrow' width={10} height={8} className={styles.arrowIcon}/>
      </button>
    </div>
  )
}

export default NewArrivals