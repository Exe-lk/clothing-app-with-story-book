import styles from './InstaLove.module.scss';
import React from 'react';
import InstaLoversList from './InstaLoversList';
import Image from 'next/image';
import { useTheme } from '../../ThemeContext';

const InstaLove = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.instaLove} ${theme==='dark' ? styles.darkInstaLove : ''}`}>
      <div className={styles.heading}>
        <p>instalove</p>
        <p><em>@fashionnova</em></p>
      </div>

      <div className={styles.content}>
        {
          InstaLoversList.map((item:any)=>{
            return(
              <ul>
                <li>
                  <Image src={item.id} alt='item' className={styles.item}/>
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}

export default InstaLove;
