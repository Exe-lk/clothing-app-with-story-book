import React, { useRef } from 'react';
import Link from 'next/link';
import styles from './Documentation.module.scss';
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
        <li className=" nav-item dropdown mx-4 my-2">
          <div className={`${styles.compoDropdown} nav-link fs-md-3 fs-sm-4 fs-4 nav-link dropdown-toggle w-100 position-relative`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className={`${styles.left} col-8  text-start`}>
              <HiArrowRightStartOnRectangle className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
              getting started
            </div>
          </div>
          <ul className="dropdown-menu border-0" aria-labelledby="navbarDropdown" data-bs-toggle="offcanvas">
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/getting-started/installation" >Installation</Link>
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/getting-started/development" >Development</Link>
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/getting-started/folder-structure" >Folder Structure</Link>
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/getting-started/bootstrap-variables" >Bootstrap Variables</Link>
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/getting-started/project-structure" >Project Structure</Link>
          </ul>
        </li>
      
      {/* components section */}
        <li className=" nav-item dropdown mx-4 my-2">
          <a href="#" className={`${styles.compoDropdown} nav-link fs-md-3 fs-sm-4 fs-4 nav-link dropdown-toggle w-100 position-relative`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className={`${styles.left} col-8  text-start`}>
              <LuComponent className="me-4 me-sm-4 me-md-5 fs-2" style={{color:'rgba(171, 93, 2, 1)'}}/>
              components
            </div>
          </a>
          <ul className="dropdown-menu border-0" aria-labelledby="navbarDropdown" data-bs-toggle="offcanvas">
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/button" >button</Link>
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/searchBar">search bar</Link>
            <Link className="dropdown-item text-capitalize ms-4 ms-md-5 fs-md-4 fs-sm-5 fs-5" href="/">component 3</Link>
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