import styles from './Heading.module.scss';
import { TfiAlignCenter } from "react-icons/tfi";
import React from 'react';


const Heading = () => {
  return (
    <div className={styles.heading}>
      <p>all categories</p>
      <TfiAlignCenter />
    </div>
  )
}

export default Heading