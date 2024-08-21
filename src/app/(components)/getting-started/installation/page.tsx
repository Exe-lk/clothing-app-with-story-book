import Link from 'next/link';
import React from 'react';
import { CgNpm } from "react-icons/cg";
import { HiOutlineCloudArrowDown } from "react-icons/hi2";
import { TbBrandYarn } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import styles from './page.module.scss';

const Installation = () => {
  return (
    <div className='cotainer-fluid mx-0 vh-100'>

      <div className={`${styles.breadCrumb} row mx-0 w-100`}>
        <nav aria-label="breadcrumb" className='my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item" style={{color: 'rgba(0, 0, 0, 0.35)'}}>Getting Started</li>
            <li className="breadcrumb-item active" aria-current="page">{`Installation`}</li>
          </ol>
        </nav>
      </div>

      <div className={`${styles.start} row mb-3 d-flex mx-0 bg-white mx-4 p-3`}>
        <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'><IoMdSettings className="rounded-circle me-3" style={{color:'rgb(77 105 250)'}}/>Before you start</p>
        <p className='fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>While explaining these documents, it is assumed that you have a basic knowledge of JS, HTML, CSS and ReactJS. You can learn more about ReactJS at <a href="https://reactjs.org/">https://reactjs.org/</a>.
        If you do not have nodejs installed on your computer, you can download <b>versions 20</b> and above from <a href="https://nodejs.org/">https://nodejs.org/</a>.  When you install node js, If you want to use <TbBrandYarn className='fs-5 text-white rounded-1' style={{background:'rgb(17, 124, 173)'}}/>  Yarn you can follow the instructions here <a href="https://classic.yarnpkg.com/en/docs/install/">https://classic.yarnpkg.com/en/docs/install/</a>. <CgNpm className='fs-5' style={{color:'red'}}/> npm is also installed with it.</p>
      </div>   

      <div className='row my-3 d-flex mx-0 bg-white mx-4 p-3'>
        <div className='col-12 d-flex align-items-center'>
          <HiOutlineCloudArrowDown className='me-3 fs-3 fw-bold' color='rgba(77,105,250,1)'/>
          <p className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold'>Install Dependencies <span className='d-block fw-normal'>step 1</span></p>
        </div>
        <p className='fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'>First, go to the root folder of the project with the terminal. You can use npm or yarn to download the required dependencies.</p>
        <div className="row mx-0">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 d-flex flex-column">
            <div className="row-mx-0">
              <CgNpm className='fs-1 my-4' style={{color:'red'}}/> <span className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold d-inline-block '>npm</span>
            </div>
            <div className="row-mx-0 d-flex">
              <p className='p-2 w-75 me-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7' style={{background:'#eff4fa'}}>npm install --legacy-peer-deps</p>
              <p className={`${styles.copy} p-2 fw-bold d-flex align-items-center btn fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa',color:'rgba(77,105,250,1)'}}><i className="bi bi-copy me-2 fw-bold"></i>Copy</p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 d-flex flex-column">
            <div className="row-mx-0">
              <TbBrandYarn className='fs-1 text-white rounded-1 my-4 me-2' style={{background:'rgb(17, 124, 173)'}}/> <span className='fs-5 fs-sm-5 fs-md-4 fs-lg-4 fs-xl-4 fs-xxl-4 fw-bold d-inline-block '>yarn</span>
            </div>
            <div className="row-mx-0 d-flex">
              <p className='p-2 w-75 me-2 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7' style={{background:'#eff4fa'}}>yarn install</p>
              <p className={`${styles.copy} p-2 fw-bold d-flex align-items-center btn fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7`} style={{background:'#eff4fa',color:'rgba(77,105,250,1)'}}><i className="bi bi-copy me-2 fw-bold"></i>Copy</p>
            </div>
          </div>
        </div>

      </div>  
      <div className="row my-3 d-flex align-items-center justify-content-between mx-0 bg-white mx-4 p-3">
        <p className='w-50 fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7'><i className="bi bi-check rounded-circle me-2 text-white border-white " style={{background:'#323232bf'}}></i>If you are ready, you can proceed to the next step.</p>
        <Link href='development' className={`${styles.next} p-2 me-2 w-auto fw-bold text-decoration-none fs-xxl-6 fs-xl-6 fs-lg-6 fs-md-6 fs-sm-7 fs-7 btn`} style={{background:'#eff4fa',color:'#46bcaa'}}><i className="bi bi-chevron-compact-right"></i>Next</Link>
      </div>
      <div className="row mt-3 d-flex align-items-center justify-content-between mx-0 bg-white px-3 w-100 p-0 position-fixed bottom-0">
        <p className='fs-7'>Copyright © 2023 - Version 4.3.4</p>
      </div>

    </div>
  )
}

export default Installation;