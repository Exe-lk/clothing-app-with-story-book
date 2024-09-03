'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Montserrat } from 'next/font/google';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
import NavBar from '../Component Navbar/ComponentNavbar';
import styles from './ComponentHeader.module.scss';
import { productList } from '@/dummy data/products';

const ComponentHeader = () => {
  return (
    <>
      <div className='col-2 d-xxl-none d-xl-none d-lg-none d-block col-sm-2 col-md-2 mt-2 p-0 text-center'>
        <NavBar />
      </div>
      <div className={`${styles.header} col-10 col-sm-6 col-md-6 col-xxl-3 col-xl-4 col-lg-3 d-flex align-items-center justify-content-center text-center mt-3 mt-xxl-0`}>
        <p className="h1 text-uppercase fs-1 p-o m-0" >fashion<span ><b>nova</b></span></p>
      </div>  
    </>

  )
}

export default ComponentHeader