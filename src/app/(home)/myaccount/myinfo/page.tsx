'use client';
import React, { useEffect } from 'react';
import styles from './page.module.scss';
import NavBar from '@/components/Home/NavBar/NavBar';
import Link from 'next/link';
import Footer from '@/components/Home/Footer/Footer';
import LeftMenu from '@/components/My Orders/Left Menu/LeftMenu';

const MyInfo = () => {
  return (
    <div className="container-fluid h-100  p-0">
      <div className='row mx-1 mx-sm-1 mx-md-1 mx-lg-0 mx-xl-0 mx-xxl-0 my-3 '>
        <nav aria-label="breadcrumb" className=' my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item"><a href="/myaccount" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>My Account</a></li>
            <li className="breadcrumb-item active" aria-current="page">My Info</li>
          </ol>
        </nav>
      </div>

      <div className='row mx-0 my-3  '>
        <div className={`${styles.heading} col-12 d-xxl-none d-xl-none d-lg-none d-md-block d-sm-block d-block text-center`}>
          <h3 className='position-relative fw-bold'>Hello Jhanvi</h3>
          <p>Welcome to your Account</p>
        </div>

        <LeftMenu />

        <div className={`${styles.right} col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 p-xxl-2 p-xl-1 p-lg-1 p-md-0 p-sm-0 p-0 d-block ms-auto me-auto `} style={{background:'rgb(246, 246, 246)'}}>
          
          <div className="row mx-0">
            <h4 className='position-relative text-capitalize fs-5 fs-xxl-3 fs-xl-3 fs-lg-4 fs-md-4 fs-sm-4 fw-bold'>My Info</h4>
          </div>


          <form className={`${styles.infoForm} row mx-0 d-flex align-items-center justify-content-start`}>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6  me-xxl-5 me-xl-5 me-lg-5 me-md-5 me-sm-0 me-0">
              <label htmlFor="name" className='form-label text-capitalize my-3 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>name</label> 
              <input type="text" id='name' className='form-control text-capitalize bg-white'/>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6  me-xxl-5 me-xl-5 me-lg-5 me-md-5 me-sm-0 me-0">
              <label htmlFor="email" className='form-label text-capitalize my-3 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>email</label>
              <input type="text" id='email' className='form-control text-capitalize bg-white'/>
            </div>
          </form>

          <div className="row mx-0 mt-4">
            <h4 className='position-relative text-capitalize fs-5 fs-xxl-3 fs-xl-3 fs-lg-4 fs-md-4 fs-sm-4 fw-bold'>Change Password</h4>
          </div>

          <form className={`${styles.infoPassword} row mx-0 d-flex align-items-center justify-content-start`}>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6  me-xxl-5 me-xl-5 me-lg-5 me-md-5 me-sm-0 me-0">
              <label htmlFor="current password" className='form-label text-capitalize my-3 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>current password</label> 
              <input type="text" id='current password' className='form-control text-capitalize bg-white'/>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6  me-xxl-5 me-xl-5 me-lg-5 me-md-5 me-sm-0 me-0">
              <label htmlFor="new password" className='form-label text-capitalize my-3 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>new password</label>
              <input type="text" id='new password' className='form-control text-capitalize bg-white'/>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6  ">
              <label htmlFor="re- enter new password" className='form-label text-capitalize my-3 fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6'>re- enter new password</label>
              <input type="text" id='re- enter new password' className='form-control text-capitalize bg-white'/>
            </div>
          </form>
          <button className='btn text-white fs-7 fs-xxl-5 fs-xl-5 fs-lg-5 fs-md-6 fs-sm-6 py-1 d-block mx-auto text-capitalize my-2 ' style={{background:'#AB5D02'}}>save</button>
        </div>
      </div>

      <div className='row my-3 ' >
        <Footer />
      </div>
    </div>
  )
}

export default MyInfo