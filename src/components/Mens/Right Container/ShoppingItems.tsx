'use client';
import styles from './ShoppingItems.module.scss';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { shoppingList } from './ShoppingList';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const ShoppingItems = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.shoppingItems} ${theme==='dark'?styles.darkShoppingItems:''}`}>
      {
          shoppingList.map((item:any, key:any)=>{
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
  )
}

export default ShoppingItems