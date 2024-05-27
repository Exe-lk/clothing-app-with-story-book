'use client';
import styles from './NewArrivals.module.scss';
import React from 'react';
import Image from 'next/image';
import { newArrivalsList } from './NewArrivalsList';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import rightArrow2 from '../../../../public/rightArrow2.svg';
import { FaHeart } from "react-icons/fa";

const NewArrivals = () => {
  return (
    <div className={styles.newArrivals}>
      <h1>new arrivals</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className={styles.content}>
        {
          newArrivalsList.map((item:any, key:any)=>{
            return(
              <div className={styles.item} >
                <Image src={item.id} alt='item' />
                {!item.favourite?(<Image src={notFav} alt='notFav' className={styles.notFav} />):(<FaHeart className={styles.fav}/>)}        
                <p>{item.des}</p>
                <p>{item.price}</p>
              </div>
            )
          })
        }
      </div>
      <button className={styles.showMore}>
        show more
        <Image src={rightArrow2} alt='rightArrow2' className={styles.rightArrow2}/>
      </button>
    </div>
    
  )
};

export default NewArrivals