'use client';

import styles from './ShopByCategories.module.scss';
import img from 'next/image';
import forWomens from '../../../../public/forWomens.svg';
import forMens from '../../../../public/forMens.svg';
import bruno from '../../../../public/bruno.png';
import rightArrow2 from '../../../../public/rightArrow2.svg';
import forKids from '../../../../public/forKids.svg';
import React from 'react';
import { useTheme } from '../../ThemeContext';
import forWomen from '../../../../public/assets/shopByCategories/forWomen.jpg';
import forMen from '../../../../public/assets/shopByCategories/forMen.jpg';
import forKid from '../../../../public/assets/shopByCategories/forKids.jpg';
import Link from 'next/link';

const ShopByCategories = () => {
  const {theme} = useTheme();
  return (
    <>
      <div className="col-12">
        {/* common header for both pc and mobile views */}
        <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>shop by categories </h1>
        <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        {/* pc view for SHOP BY CATEGORIES (for lg,xl,xxl sizes) */}
        <div className="row mx-0 d-xxl-flex d-xl-flex d-lg-flex d-block justify-content-center align-items-center">
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-12 h-100 me-xxl-5 me-xl-3 me-lg-3" style={{background: 'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%'}}>
            <div className="row mx-0 my-xxl-5 my-xl-5 my-lg-5 my-2">
              <h1 className='fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 text-start text-capitalize fw-semibold'>{`for women's`}</h1>
            </div>
            <div className="row mx-0 position-relative">
              <ul className='col-6 list-unstyled my-xxl-5 my-xl-5 my-lg-5 my-md-5 my-2'>
                <li className='my-2'>dresses</li>
                <li className='my-2'>sarees</li>
                <li className='my-2'>t-shirts and blouses</li>
                <li className='my-2'>jackets & coats</li>
                <li className='my-2'>jeans</li>
                <li className='my-2'>knit</li>
              </ul>
              <div className={`${styles.forWomens} col-6 position-absolute bottom-0`}>
                <img src={forWomens.src} alt="forWomens" className="img-fluid "/>
              </div>
              <Link href='/women' className={`${styles.showMore} text-uppercase my-2 btn text-start`} style={{color:'#AB5D02'}}>show more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-12">
            <div className="row mx-0 position-relative my-4 my-sm-5 my-md-5" style={{background: 'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%'}}>
              <h1 className='fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 text-start text-capitalize fw-semibold'>{`for men's`}</h1>
              <ul className='col-6 list-unstyled'>
                <li className='my-2'>t-shirts & shirts</li>
                <li className='my-2'>jeans</li>
                <li className='my-2'>jacket & coats</li>
                <li className='my-2'>shorts</li>
              </ul>
              <div className={`${styles.forMens} col-6 position-absolute bottom-0 me-0 ms-auto`}>
                <img src={forMens.src} alt="forMens" className="img-fluid "/>
              </div>
              <Link href='/men' className={`${styles.showMore} text-uppercase my-2 btn text-start`} style={{color:'#AB5D02'}}>show more <i className="bi bi-arrow-right"></i></Link>
            </div>
            <div className="row mx-0 my-5  position-relative" style={{background: 'linear-gradient(213.42deg, #EEEEF0 8.79%, #FFF7F0 80.12%'}}>
              <h1 className='fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 text-start text-capitalize fw-semibold'>{`for kid's`}</h1>
                <ul className='col-6 list-unstyled'>
                  <li className='my-2'>t-shirts & shirts</li>
                  <li className='my-2'>jeans</li>
                  <li className='my-2'>jacket & coats</li>
                  <li className='my-2'>shorts</li>
                </ul>
                <div className={`${styles.forKids} col-6 position-absolute bottom-0 me-0 ms-auto`}>
                  <img src={forKids.src} alt="forKids" className="img-fluid "/>
                </div>
                <Link href='/kids' className={`${styles.showMore} text-uppercase my-2 btn text-start`} style={{color:'#AB5D02'}}>show more <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ShopByCategories