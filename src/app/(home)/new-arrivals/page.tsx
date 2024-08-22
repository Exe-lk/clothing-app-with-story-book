'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import Heading from '@/components/Discount/Left Container/All Categories/Heading';
import Sizes from '@/components/Discount/Left Container/Sizes/Sizes';
import Colors from '@/components/Discount/Left Container/Colors/Colors';
import Price from '@/components/Discount/Left Container/Price/Price';
import ShoppingItems from '@/components/New Arrivals/Right Container/ShoppingItems';
import Footer from '@/components/Home/Footer/Footer';

const NewArrivals = () => {
  const [selectedValue,setSelectedValue] = useState("all");
  return (

    <div className='container-fluid h-100'>

      <div className='row mx-1 mx-sm-1 mx-md-1 mx-lg-0 mx-xl-0 mx-xxl-0 my-3 '>
        <nav aria-label="breadcrumb " className=' my-auto'>
          <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
            <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">{`New-Arrivals`}</li>
          </ol>
        </nav>
      </div>

      <div className='row my-3 h-100 d-flex mx-0'>

        <div className="col-12 d-xxl-none d-lg-none d-xl-none d-block ms-3">
          <button className="collapse-btn fw-bold text-uppercase text-white px-2 py-1 fs-7 fs-sm-6 fs-md-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMenu" aria-expanded="true" aria-controls="collapseExample" style={{background:'#AB5D02'}}>filters</button>
        </div>

        {/* filters menu for md|sm|xs views */}
        <div className='collapse d-xxl-none d-xl-none d-lg-none my-2 mx-auto' id='collapseMenu' style={{borderBottom:'1px solid #AB5D02',borderLeft:'1px solid #AB5D02',borderRight:'1px solid #AB5D02',backgroundColor:'rgba(249, 249, 249, 1)'}}>
          <div className='row text-capitalize p-1 mx-1 fs-xxl-5 fs-xl-5 fs-lg-6 my-3'>
            <div className="col-6 col-lg-9 d-flex justify-content-between align-items-center w-100">
              <p className='d-block my-auto'>categories</p>
              <select className='text-white' name="" id="" onChange={(e) => setSelectedValue(e.target.value)} style={{background:'rgb(171, 93, 2)'}}>
                <option value="all">All</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>
              </select>
            </div>
          </div>
          <Sizes />
          <Colors />
          <Price />
        </div>

        <div className="col-3 d-xxl-flex d-xl-flex d-lg-flex d-none flex-column justify-content-evenly h-100" style={{background: 'rgba(249, 249, 249, 1)'}}>
          <div className='row text-capitalize p-1 mx-1 fs-xxl-5 fs-xl-5 fs-lg-6 my-3'>
            <div className="col-6 col-lg-9 d-flex justify-content-between align-items-center w-100">
              <p className='d-block my-auto'>categories</p>
              <select className='text-white' name="" id="" onChange={(e) => setSelectedValue(e.target.value)} style={{background:'rgb(171, 93, 2)'}}>
                <option value="all">All</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>
              </select>
            </div>
          </div>
          <Sizes />
          <Colors />
          <Price />
        </div>

        <div className="col-xxl-9 col-xl-9 col-lg-9 col-12 border-0 ">
          <ShoppingItems category={selectedValue} />
        </div>
      </div>

      <div className='row my-3'>
          <Footer />
      </div> 
    </div>
  )
}

export default NewArrivals