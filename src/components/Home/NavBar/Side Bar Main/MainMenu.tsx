import React from 'react';
import Link from 'next/link';
import { FaChildren } from "react-icons/fa6";
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <ul className={`${styles.main} col-12 navbar-nav text-capitalize fs-xxl-5 h-100`}>

      {/* back to home */}
      <Link href="/" className='nav-link fs-md-3 fs-sm-4 fs-4' >
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start`}>
            <i className="bi bi-house-door me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}></i>
            home
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>

      {/* to women's section */}
      <Link href="/women" className='nav-link fs-md-3 fs-sm-4 fs-4' >
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start`}>
            <i className="bi bi-person-standing-dress me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}></i>
            women
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>     

      {/* to men's section */} 
      <Link href="/men" className='nav-link fs-md-3 fs-sm-4 fs-4' >
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start`}>
            <i className="bi bi-person-standing me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}></i>
            men
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>

      {/* to kid's section */}
      <Link href="/kids" className='nav-link fs-md-3 fs-sm-4 fs-4' >
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start`}>
            <FaChildren className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
            kids
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>

      {/* to about us section */}
      <Link href="/aboutus" className='nav-link fs-md-3 fs-sm-4 fs-4' >
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start`}>
            <i className="bi bi-file-person me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}></i>
            about us
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>

      {/* to contact us section */}
      <Link href="/contactus" className='nav-link fs-md-3 fs-sm-4 fs-4' >
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start`}>
            <i className="bi bi-person-lines-fill me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}></i>
            contact us
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>
      
    </ul>
  )
}

export default MainMenu