'use client';
import React from 'react';
import styles from './page.module.scss';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import Path from '@/components/Mens/Page Path/Path';
import Heading from '@/components/Mens/Left Container/All Categories/Heading';
import Mens from '@/components/Mens/Left Container/Mens/Mens';
import Sizes from '@/components/Mens/Left Container/Sizes/Sizes';
import Colors from '@/components/Mens/Left Container/Colors/Colors';
import Price from '@/components/Mens/Left Container/Price/Price';
import ShoppingItems from '@/components/Mens/Right Container/ShoppingItems';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';
import Footer from '@/components/Home/Footer/Footer';

const MensPage = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.mensContainer} ${theme==='dark'?styles.darkMensContainer:''}`}>
    //   <div className={styles.aside}>
    //     <SideBar/>
    //   </div>
    //   <div className={styles.wrapper}>
    //     <Header />
    //     <NavBar />
    //     <Path prevPath={'home'} currentPath={">men's"}/>
    //     <div className={styles.content}>
    //       <div className={styles.left}>
    //         <Heading />
    //         <Mens />
    //         <Sizes />
    //         <Colors />
    //         <Price />
    //       </div>
    //       <div className={styles.right}>
    //         <ShoppingItems />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='container-fluid h-100'>

      <div className='row mx-1 mx-sm-1 mx-md-1 mx-lg-0 mx-xl-0 mx-xxl-0 my-3 '>
        <nav aria-label="breadcrumb " className=' my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">{`Men's`}</li>
          </ol>
        </nav>
      </div>

      <div className='row my-3 h-100 d-flex mx-0'>

        <div className="col-12 d-xxl-none d-lg-none d-xl-none d-block ms-3">
          <button className="collapse-btn fw-bold text-uppercase text-white px-2 py-1 fs-7 fs-sm-6 fs-md-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu" aria-expanded="true" aria-controls="collapseExample" style={{background:'#AB5D02'}}>filters</button>
        </div>

        {/* filters menu for md|sm|xs views */}
        <div className='collapse d-xxl-none d-xl-none d-lg-none my-2 mx-auto' id='collapseMenu' style={{borderBottom:'1px solid #AB5D02',borderLeft:'1px solid #AB5D02',borderRight:'1px solid #AB5D02',backgroundColor:'rgba(249, 249, 249, 1)'}}>
          <Heading />
          <Mens />
          <Sizes />
          <Colors />
          <Price />
        </div>

        <div className="col-3 d-xxl-flex d-xl-flex d-lg-flex d-none flex-column justify-content-evenly h-100" style={{background: 'rgba(249, 249, 249, 1)'}}>
          <Heading />
          <Mens />
          <Sizes />
          <Colors />
          <Price />
        </div>

        <div className="col-xxl-9 col-xl-9 col-lg-9 col-12 border-0 ">
          <ShoppingItems />
        </div>
      </div>

      <div className='row my-3'>
          <Footer />
      </div> 
    </div>
  )
}

export default MensPage