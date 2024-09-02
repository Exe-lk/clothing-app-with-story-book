'use client'
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import styles from './page.module.scss';
import React, { useState } from 'react';
import item from '../../../../../public/assets/wishlist/wishlist.png';
import Footer from '@/components/Home/Footer/Footer';
import Link from 'next/link';
import LeftMenu from '@/components/My Orders/Left Menu/LeftMenu';

const Wishlist = () => {

  return (
    <div className="container-fluid h-100  p-0">

      <div className='row mx-1 mx-sm-1 mx-md-1 mx-lg-0 mx-xl-0 mx-xxl-0 my-3 '>
        <nav aria-label="breadcrumb" className=' my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item"><a href="/myaccount" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>My Account</a></li>
            <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
          </ol>
        </nav>
      </div>

      <div className='row mx-0 my-3  '>
        <div className={`${styles.heading} col-12 d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block d-block text-center`}>
          <h3 className='position-relative fw-bold'>Hello Jhanvi</h3>
          <p>Welcome to your Account</p>
        </div>
        <LeftMenu />
        <div className={`${styles.right} col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 p-xxl-1 p-xl-1 p-lg-1 p-md-0 p-sm-0 p-0 d-block ms-auto me-auto `}>

          <div className="row mx-0">
            <h4 className='position-relative'>Wishlist</h4>
          </div>

          <div className="row mx-0">

            <ul className='list-group p-0 rounded-0'>

              {/* item1 */}
              <li className='list-group-item d-flex justify-content-between mx-0 p-0 my-1'>
                <div className="col-1 btn  my-auto fs-4 align-items-center justify-content-between  d-none d-sm-none d-xxl-flex d-xl-flex d-lg-flex d-md-none">
                  <i className="bi bi-x m-auto fs-2"></i>
                </div>
                <div className="col-2  d-flex align-items-center justify-content-center ">
                  <img src={item.src} alt="item" className='img-fluid'/>
                </div>
                <div className="col-4  d-flex flex-column align-items-start justify-content-between px-1">
                  <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Blue Flower Print Crop Top </h5>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Yellow</span></p>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                </div>

                {/* for md|sm|xs views */}
                <div className='col-4 d-xxl-none d-xl-none d-lg-none my-auto'>
                  <div className="row mx-0 d-block">
                    <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                  </div>
                  <div className="row mx-0 px-3 ">
                    <button className={`${styles.btn1} btn text-white fs-8  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-0 py-1 d-block mx-auto`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                  </div>
                </div>

                {/* for xxl|xl|lg views */}
                <div className="col-5 d-xxl-flex d-xl-flex d-lg-flex d-none">
                  <div className="row mx-0 w-100 my-auto">
                    <div className="col-6">
                      <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                    </div>
                    <div className="col-6">
                      <button className={`${styles.btn1} btn text-white fs-7  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-1 py-1 d-block mx-auto`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                    </div>
                  </div>
                </div>

                <div className="col-2 d-flex justify-content-center align-items-center d-sm-flex d-md-flex d-xxl-none d-xl-none d-lg-none">
                  <i className={`${styles.btn2} bi bi-x btn btn-danger px-1 py-0 h-50 w-50 fs-md-2 fs-sm-2 fs-4 d-flex justify-content-center align-items-center`}></i>
                </div>
              </li>

              {/* item2 */}
              <li className='list-group-item d-flex justify-content-between mx-0 p-0 my-1'>
                <div className="col-1 btn  my-auto fs-4 align-items-center justify-content-between  d-none d-sm-none d-xxl-flex d-xl-flex d-lg-flex d-md-none">
                  <i className="bi bi-x m-auto fs-2"></i>
                </div>
                <div className="col-2  d-flex align-items-center justify-content-center ">
                  <img src={item.src} alt="item" className='img-fluid'/>
                </div>
                <div className="col-4  d-flex flex-column align-items-start justify-content-between px-1">
                  <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Blue Flower Print Crop Top </h5>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Yellow</span></p>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                </div>

                {/* for md|sm|xs views */}
                <div className='col-4 d-xxl-none d-xl-none d-lg-none my-auto'>
                  <div className="row mx-0 d-block">
                    <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                  </div>
                  <div className="row mx-0 px-3 ">
                    <button className={`${styles.btn1} btn text-white fs-8  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-0 py-1 d-block mx-auto`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                  </div>
                </div>

                {/* for xxl|xl|lg views */}
                <div className="col-5 d-xxl-flex d-xl-flex d-lg-flex d-none">
                  <div className="row mx-0 w-100 my-auto">
                    <div className="col-6">
                      <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                    </div>
                    <div className="col-6">
                      <button className={`${styles.btn1} btn text-white fs-7  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-1 py-1 d-block mx-auto`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                    </div>
                  </div>
                </div>

                <div className="col-2 d-flex justify-content-center align-items-center d-sm-flex d-md-flex d-xxl-none d-xl-none d-lg-none">
                  <i className={`${styles.btn2} bi bi-x btn btn-danger px-1 py-0 h-50 w-50 fs-md-2 fs-sm-2 fs-4 d-flex justify-content-center align-items-center`}></i>
                </div>
              </li>

              {/* item3 */}
              <li className='list-group-item d-flex justify-content-between mx-0 p-0 my-1'>
                <div className="col-1 btn  my-auto fs-4 align-items-center justify-content-between  d-none d-sm-none d-xxl-flex d-xl-flex d-lg-flex d-md-none">
                  <i className="bi bi-x m-auto fs-2"></i>
                </div>
                <div className="col-2  d-flex align-items-center justify-content-center ">
                  <img src={item.src} alt="item" className='img-fluid'/>
                </div>
                <div className="col-4  d-flex flex-column align-items-start justify-content-between px-1">
                  <h5 className='p-0 m-0 text-start fw-bold fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Blue Flower Print Crop Top </h5>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Color : <span style={{color:'rgba(128, 125, 126, 1)'}}>Yellow</span></p>
                  <p className='p-0 m-0 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>Quantity : <span style={{color:'rgba(128, 125, 126, 1)'}}>1</span></p>
                </div>

                {/* for md|sm|xs views */}
                <div className='col-4 d-xxl-none d-xl-none d-lg-none my-auto'>
                  <div className="row mx-0 d-block">
                    <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                  </div>
                  <div className="row mx-0 px-3 ">
                    <button className={`${styles.btn1} btn text-white fs-8  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-0 py-1 d-block mx-auto`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                  </div>
                </div>

                {/* for xxl|xl|lg views */}
                <div className="col-5 d-xxl-flex d-xl-flex d-lg-flex d-none">
                  <div className="row mx-0 w-100 my-auto">
                    <div className="col-6">
                      <p className='fs-6 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 text-center w-100 fw-bold' style={{color:'rgba(128, 125, 126, 1)'}}>Rs 1700.00</p>
                    </div>
                    <div className="col-6">
                      <button className={`${styles.btn1} btn text-white fs-7  py-xxl-2 py-xl-2 py-lg-2 py-md-1 py-sm-1 py-1 d-block mx-auto`} style={{background:'#AB5D02'}}>ADD TO CART</button>
                    </div>
                  </div>
                </div>

                <div className="col-2 d-flex justify-content-center align-items-center d-sm-flex d-md-flex d-xxl-none d-xl-none d-lg-none">
                  <i className={`${styles.btn2} bi bi-x btn btn-danger px-1 py-0 h-50 w-50 fs-md-2 fs-sm-2 fs-4 d-flex justify-content-center align-items-center`}></i>
                </div>
              </li>
            </ul>  
          </div>
        </div>
      </div>
      <div className='row my-3 ' >
        <Footer />
      </div>
    </div>
  )
}

export default Wishlist