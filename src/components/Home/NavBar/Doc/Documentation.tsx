import React from 'react';
import Link from 'next/link';
import styles from './Documentation.module.scss';
import { MdOutlineDashboard } from "react-icons/md";
import { LuComponent } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import { TbCards } from "react-icons/tb";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";

const Documentation = () => {
  return (
    <ul className={`${styles.main} col-12 navbar-nav text-capitalize fs-xxl-5 h-100`}>
      {/* back to home */}
      <Link href="/" className='nav-link fs-md-3 fs-sm-4 fs-4'>
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start text-start`}>
            <i className="bi bi-house-door me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}></i>
            home
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>
      {/* to getting-started menu */}
      <Link href="/getting-started" className='nav-link fs-md-3 fs-sm-4 fs-4'>
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start text-start`}>
            <HiArrowRightStartOnRectangle className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
            getting started
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>     
      {/* to mens section */}
      <Link href="/mens" className='nav-link fs-md-3 fs-sm-4 fs-4'>
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start text-start`}>
            <MdOutlineDashboard className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
            dashboard
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>
      {/* components section */}
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2 dropdown" data-bs-toggle="offcanvas">
          <a href="#" className='nav-link fs-md-3 fs-sm-4 fs-4 nav-link dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start text-start`}> */}
              <LuComponent className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
              components
            {/* </div> */}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-capitalize" href="/button">button</a></li>
            <li><a className="dropdown-item text-capitalize" href="/searchBar">search bar</a></li>
            <li><a className="dropdown-item text-capitalize" href="/">component 3</a></li>
          </ul>
        </li>

      {/* to forms section */}
      <Link href="/forms" className='nav-link fs-md-3 fs-sm-4 fs-4'>
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start text-start`}>
            <AiOutlineForm className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
            forms
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>

      {/* to cards section */}
      <Link href="/cards" className='nav-link fs-md-3 fs-sm-4 fs-4'>
        <li className="nav-item mx-4 d-flex align-items-center justify-content-between my-2" data-bs-toggle="offcanvas">
          <div className={`${styles.left} col-8 d-flex align-items-center justify-content-start text-start`}>
            <TbCards className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
            cards
          </div>
          <div className={`${styles.right} col-3 d-flex justify-content-end`}>
            <i className={`${styles.icon2} bi bi-arrow-right-circle btn fs-2`} style={{color:'rgba(171, 93, 2, 1)'}}></i>
          </div>
        </li>
      </Link>
      
    </ul>
  )
}

export default Documentation