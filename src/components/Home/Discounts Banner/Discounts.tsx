import styles from './Discounts.module.scss';
import React from 'react';
import Image from 'next/image';
import lefttImg from '../../../../public/assets/discounts/leftImage.png';
import rightImg from '../../../../public/assets/discounts/rightImage.jpg';
import Link from 'next/link';

const Discounts = () => {
  return(
    <>
      {/* discount banner left image */}
      <div className={`${styles.leftImg} col-5 p-0`}>
        <Image src={lefttImg}  alt='lefttImg' className={`${styles.img} img-fluid object-fit-cover`}/>
      </div>
      {/* discount banner middle description */}
      <div className={`${styles.content} col-3 d-flex flex-column align-items-center justify-content-center px-1`} style={{background:'rgba(245, 245, 245, 1)'}}>
          <h1 className='text-capitalize my-xxl-3 my-xl-3 my-lg-3 my-md-3 my-sm-2 my-2 fw-bold '> {`women’s latest fashion`}</h1>
          <h3 className='text-capitalize my-xxl-3 my-xl-3 my-lg-2 my-md-2 my-sm-2 my-1 w-100 fs-xxl-2 fs-xl-3 fs-lg-4 fs-md-3 fs-sm-5 fs-7' style={{color:'#AB5D02'}}>20% discount</h3>
          <div className='w-100'>
            <Link href='/discount-items' className='btn text-white text-uppercase my-xxl-3 my-xl-3 my-lg-3 my-md-3 my-sm-2 my-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-8 p-sm-1 p-1 p-xxl-2 p-xl-2 p-lg-2 p-md-2' style={{background:'#AB5D02'}}>
              discover now
              <i className="bi bi-arrow-right ps-xxl-2 ps-xl-2 ps-1"></i>
            </Link>
          </div>
      </div>
      {/* discount banner right image */}
      <div className={`${styles.rightImg} col-4 p-0`}>
        <Image src={rightImg}  alt='rightImg' className={`${styles.img} img-fluid object-fit-cover `}/>
      </div>
    </>
  )
}

export default Discounts;