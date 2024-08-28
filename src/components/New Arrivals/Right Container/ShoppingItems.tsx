'use client';
import styles from './ShoppingItems.module.scss';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { newArrivalsPageList } from '../../../../public/assets/NewArrivalsPageList';
import React, { useState } from 'react';
import { useTheme } from '@/components/ThemeContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Item {
  id: string;
  name: string;
  discount: boolean;
  category: string;
  favourite: boolean;
  des: string;
  price: string;
}

const ShoppingItems = (props:any) => {
  const {theme} = useTheme();
  const router = useRouter();
  const [items, setItems] = useState<Item[]>(newArrivalsPageList);
  const toggleFavourite = (id:string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, favourite: !item.favourite} : item
      )
    )
  }
  return (
    <div className="row mx-0">
      {
        items.filter(function(i:any){
          if(props.category=='all'){
            return items
          }else{
            return i.category==props.category
          }
        }).map((item:any, key:any)=>{
          return(
          <div className={`${styles.itemContainer} col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 position-relative d-flex flex-column align-items-center text-capitalize my-md-3 my-sm-2 my-2`} key={key}>
            <div className={`${styles.imageContainer} row mx-0 d-flex align-items-center m-0 p-0 position-relative`}>
              <Link href={{pathname: `/${item.category}/#`, query: {id: item.id, name: item.des}}} className='text-decoration-none text-black p-0'>
                <Image src={item.name} alt='item' className='img-fluid object-fit-cover m-0 p-0 rounded-3'/>
                <div className={`${styles.ribbonContainer} position-absolute top-0 start-0 position-relative bg-transparent overflow-hidden`}>
                  <div className={`${styles.ribbon} text-uppercase fw-bold text-white position-absolute text-center fs-8 fs-sm-7 fs-xxl-6 fs-xl-6 w-auto`}>new arrivals</div>
                </div>
              <div className={`${styles.addToCart} row btn rounded-0 mx-0 position-absolute bottom-0 d-flex align-items-center justify-content-center text-white p-xxl-3 p-xl-3 p-lg-3 p-2 w-100`} >
                <i className="bi bi-cart3 w-auto ps-0 pe-2 fs-xxl-6"></i>
                <p className='w-auto p-0 m-0 text-capitalize fs-xxl-6'>add to cart</p>
              </div>         
              </Link>
                {
                  item.discount? <div className={`${styles.discount} position-absolute fs-xxl-7 btn m-0 p-0 w-auto rounded-circle text-white fw-bold d-flex align-items-center justify-content-center p-1 fs-8`} style={{background:'red'}}>
                    -50%
                  </div>:''
                }
                {
                  item.favourite? <i className={`${styles.heart} bi bi-heart-fill position-absolute fs-xxl-5 btn m-0 p-0 w-auto rounded-circle bg-white px-1 py-0`} onClick={()=>{
                    toggleFavourite(item.id)
                  }}></i> : <i className={`${styles.heart} bi bi-heart  position-absolute fs-xxl-5 btn m-0 p-0 w-auto rounded-circle bg-white px-1 py-0`} onClick={()=>{
                    toggleFavourite(item.id)
                  }}></i>
                }
            </div>
            <div className={`${styles.itemDes} row mx-0 d-flex align-items-center justify-content-between position-relative bg-white w-100 p-0`} >
              <p className={`${styles.itemDes} text-start fs-7 fs-sm-7 fs-md-6 fs-xxl-5 fs-xl-6 fs-lg-6 p-0 m-sm-0 m-0`} style={{color:'#5A5A5A'}}>{item.des}</p>
              <p className='text-start fw-bold p-0 fs-7 fs-sm-6 fs-md-5 fs-xxl-4 fs-xl-5 fs-lg-4' style={{color:'#5A5A5A'}}>{item.price}</p>
            </div>
          </div>

          )
        })
      }
    </div>
  )
}

export default ShoppingItems