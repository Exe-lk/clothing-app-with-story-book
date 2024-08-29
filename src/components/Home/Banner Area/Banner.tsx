'use client';

import React from 'react';
import styles from './Banner.module.scss';
import Image from 'next/image';
import banner from '../../../../public/banner.jpg';

const Banner = () => {
  return (
    <>
      {/* container for text within the banner */}
      <div className={`${styles.bannerImageContainer} col-12 px-0 h-100 w-100 z-1 position-absolute top-0 start-0 p-xxl-5 p-xl-4 p-lg-3 p-md-3 p-sm-1 px-0 mx-xxl-5 mx-xl-3 mx-lg-3 mx-md-3 mx-sm-0 mx-0 my-1 my-lg-5`}>
        <p className={`${styles.heading} text-capitalize h1 text-end fw-bold me-xxl-5 me-xl-5 me-md-4 me-2 me-lg-5 mb-xxl-4 mb-xl-4 mb-lg-4 mb-md-4 mb-sm-3 mb-2 mt-5`} style={{color:'#AB5D02'}}>explore our most recent <br/> assortment</p>
        <p className={`${styles.text} mb-5 fw-bold text-end fs-xxl-1 fs-xl-2 fs-lg-3 fs-md-4 fs-sm-7 fs-8 me-xxl-5 me-xl-5 me-2 me-md-4 me-lg-5`}>Our curated collection blends comfort with style, ensuring <br/>you make a statement effortlessly</p>
      </div>

      {/* container for banner image */}
      <div className='col-12 h-100 px-0 z-0 w-100'>
        <Image src={banner} alt="banner" className='img-fluid object-fit-cover w-100' style={{backgroundSize:'cover'}}/>
      </div>
    </>
  )
}
export default Banner