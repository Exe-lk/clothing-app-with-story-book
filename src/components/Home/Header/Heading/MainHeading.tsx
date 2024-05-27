import styles from './Heading.module.scss';
import React from 'react';
import mainHeading from '../../../../public/mainHeading.svg';
import Image from 'next/image';

const MainHeading = () => {
  return (
    <div className={styles.mainHeading}>
      {/* <Image src={mainHeading} alt='Main Heading' width={233} height={131} /> */}
      <p>fashion<span><b>nova</b></span></p>
    </div>
  )
}

export default MainHeading