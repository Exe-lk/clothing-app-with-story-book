'use client';

import React from 'react';
import styles from './Banner.module.scss';
import Image from 'next/image';
import banner from '../../../../public/banner.png';
import rightArrow1 from '../../../../public/rightArrow1.svg';
import rightArrow2 from '../../../../public/rightArrow2.svg';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image src={banner} alt="banner" className={styles.bannerImage} />
      <p>explore our most recent <br/> assortment</p>
      <p>Our curated collection blends comfort with style, ensuring <br/>
      you make a statement effortlessly</p>
      <div className={styles.buttons}>
        <button>
          discover now
          <Image src={rightArrow1} alt="rightArrow1" className={styles.rightArrow1} width={18} height={8} />
        </button>
        <button>
          buy now
          <Image src={rightArrow2} alt="rightArrow2" className={styles.rightArrow2} width={18} height={8} />
        </button>
      </div>
    </div>
  )
}

export default Banner