import styles from './Price.module.scss';
import React from 'react';

const Price = () => {
  return (
    <div className={styles.price}>
      <p className={styles.priceTitle}>price</p>
      <input type="range" className={styles.range}/>
      <p className={styles.priceFilter}>rs : <span><input type="text" name="" id="" /> - <input type="text" name="" id="" /></span></p>
    </div>
  )
}

export default Price