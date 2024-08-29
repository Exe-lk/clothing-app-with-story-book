'use client';

import styles from './NewArrivals.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { newArrivalsHomeList } from '../../../../public/assets/NewArrivalsHomeList';

// Item interface for type saftey
interface Item {
  id: number;
  name: string;
  discount: boolean;
  favourite: boolean;
  des: string;
  price: string;
}

const NewArrivals = () => {
  const [items, setItems] = useState<Item[]>(newArrivalsHomeList);

  // implements fav icon toggling functionality
  const toggleFavorite = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, favourite: !item.favourite }
          : item
      )
    );
  };

  return (
    <>
        <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>new arrivals</h1>
        <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
        <div>
        
          {
            // here we are mapping the list with managed states for fav icon
            items.map((item:any, key:any)=>{
              return(
                <div className={`${styles.itemContainer} itemCont btn col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 m-xxl-5 mx-3 my-2 m-sm-2 m-md-2 p-0 h-100`} key={item.id}>
                  <div className={`${styles.imageContainer} row mx-0 d-flex align-items-center m-0 p-0 position-relative`}>
                    <Image src={item.name} alt='item' className={`${styles.image} img-fluid object-fit-cover m-0 p-0 rounded-3 `}/>

                    {/* show the discount badge if it is available */}
                    {
                      item.discount? <div className={`${styles.discount} position-absolute fs-xxl-7 btn m-0 p-0 w-auto rounded-circle text-white fw-bold d-flex align-items-center justify-content-center p-1 fs-8`} style={{background:'red'}}>
                        -50%
                      </div>:''
                    }

                    {/* toggling between fav and not-fav icons */}
                    {
                      item.favourite ? <i className={`${styles.heart} bi bi-heart-fill position-absolute fs-xxl-5 btn m-0 p-0 w-auto rounded-circle bg-white px-1 py-0`} onClick={() => toggleFavorite(item.id)}></i> : <i className={`${styles.heart} bi bi-heart  position-absolute fs-xxl-5 btn m-0 p-0 w-auto rounded-circle bg-white px-1 py-0`} onClick={() => toggleFavorite(item.id)}></i>
                    }
                    
                    <div className={`${styles.addToCart} row btn rounded-0 mx-0 position-absolute bottom-0 d-flex align-items-center justify-content-center text-white p-xxl-3 p-xl-3 p-lg-3 p-2 w-100`} style={{background:'rgba(171, 93, 2, 0.66)'}}>
                      <i className="bi bi-cart3 w-auto ps-0 pe-2 fs-xxl-6"></i>
                      <p className='w-auto p-0 m-0 text-capitalize fs-xxl-6'>add to cart</p>
                    </div>      
                  </div>
                  <div className={`${styles.itemDes} row mx-0 d-flex align-items-start justify-content-between position-relative bg-white`} >
                    <p className='text-start fs-6 fs-sm-6 fs-xxl-5 fs-xl-5 fs-lg-5 p-0 mb-0 position-absolute top-0 text-capitalize' style={{color:'#5A5A5A'}}>{item.des}</p>
                    <p className='text-start fw-bold p-0 fs-6 fs-sm-5 fs-xxl-4 fs-xl-4 fs-lg-4 mb-0 position-absolute bottom-0' style={{color:'#5A5A5A'}}>{item.price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </>
  )
};

export default NewArrivals