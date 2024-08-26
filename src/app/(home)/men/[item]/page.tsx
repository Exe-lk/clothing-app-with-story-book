'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import React, {useEffect, useRef, useState} from 'react';
import Header from '@/components/Home/Header/Header';
import NavBar from '@/components/Home/NavBar/NavBar';
import Path from '@/components/Mens/Page Path/Path';
import SideBar from '@/components/Side Bar/SideBar';
import { useTheme } from '@/components/ThemeContext';
import Footer from '@/components/Home/Footer/Footer';
import { sizesLi } from '@/components/Mens/Left Container/Sizes/SizesList';
import {mensCartList} from '../../../../../public/assets/mensItemsList';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { mensRelatedItemsList } from '../../../../../public/assets/mensRelatedItemsList';
import notFav from '../../../../public/assets/newArrivals/notFav.svg';
import { FaHeart } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { IoHeartCircleSharp } from "react-icons/io5";
import { BiHeartCircle } from "react-icons/bi";
import Link from 'next/link';

interface Item {
  id: number;
  name: string;
  favourite: boolean;
  des: string;
  price: string
}


const MensItem = () => {
  const {theme} = useTheme();
  const [value, setValue] = useState(0);
  const searchParams = useSearchParams();
  const ref = useRef<HTMLDivElement>();
  const [items, setItems] = useState<Item []>(mensRelatedItemsList);
  const toggleFavourite = (id:number) =>{
    setItems(prevItems=>
      prevItems.map(item=>
        item.id === id ? {...item, favourite: !item.favourite}: item
      )
    )
  }
  useEffect(() => {
    const allLink = ref.current.querySelectorAll('div');
    function changeMenuActive(this:any){{
      allLink.forEach(n=>{
        n.classList.remove(`${styles.active}`)
      })
      this.classList.add(`${styles.active}`)
    }}

    allLink.forEach(e=>{
      e.addEventListener('click', changeMenuActive)
    })
  },[])
  return (

    <>

{
        mensCartList.map((item:any,key:any)=>(
          item.itemId==searchParams.get('id') && item.name==searchParams.get('name')? (

            <div className='container-fluid h-100' key={key}>

              <div className='row mx-1 mx-sm-1 mx-md-1 mx-lg-0 mx-xl-0 mx-xxl-0 my-3' >
                <nav aria-label="breadcrumb" className=' my-auto'>
                  <ol className="breadcrumb fs-7 fs-sm-6 fs-md-5 fs-xxl-5 fs-xl-5 fs-lg-5">
                    <li className="breadcrumb-item"><a href="/" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>Home</a></li>
                    <li className="breadcrumb-item"><a href="/mens" className='text-decoration-none' style={{color: 'rgba(0, 0, 0, 0.35)'}}>{`mens`}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{item.name}</li>
                  </ol>
                </nav>
              </div>

              <div className='row my-2 d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row justify-content-md-between ' >

                {/* carsoul */}
                <div id="mensItems" className={`${styles.mensItemCarsoul} carousel slide col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-8 col-10 h-100 m-md-auto m-auto m-sm-auto m-lg-0`} data-bs-ride="carousel">

                  <div className={`${styles.carsoulIndi} carousel-indicators`} style={{marginBottom:'-20px'}}>
                    <button type="button" data-bs-target="#mensItems" data-bs-slide-to="0" className="active w-25">
                      <img src={item.images[0].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </button>
                    <button type="button" data-bs-target="#mensItems" data-bs-slide-to="1" className=' w-25'>
                      <img src={item.images[1].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </button>
                    <button type="button" data-bs-target="#mensItems" data-bs-slide-to="2" className=' w-25'>
                      <img src={item.images[2].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </button>
                    <button type="button" data-bs-target="#mensItems" data-bs-slide-to="3" className=' w-25'>
                      <img src={item.images[3].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </button>
                  </div>


                  <div className="carousel-inner h-100">
                    <div className="carousel-item active">
                      <img src={item.images[0].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </div>
                    <div className="carousel-item">
                      <img src={item.images[1].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </div>
                    <div className="carousel-item">
                      <img src={item.images[2].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </div>
                    <div className="carousel-item">
                      <img src={item.images[3].src} alt='item' className="img-fluid d-block w-100 rounded-3" />
                    </div>
                  </div>
                </div>

                <div className={`${styles.itemDetails} col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 p-1`} >

                  <div className='row mx-0 mb-2 d-flex justify-content-between align-items-center'>
                    <div className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-0'>
                      <p className='h1 text-uppercase fs-5 fs-xxl-1 fs-xl-2 fs-lg-1 fs-md-1 fs-sm-1 fw-bold text-start'>{item.name}</p>
                    </div>
                    <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-1 col-1 rounded-2 text-center text-capitalize p-1 w-auto' style={{background: 'hsla(32, 98%, 34%, 0.32)',width:'fit-content'}}>
                      <p className='text-center my-auto fs-8 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-5 fs-xxl-5'>{item.availability}</p>
                    </div>
                  </div>

                  <div className='row mx-0 my-2 py-2'>
                    <div className='col-12 p-0'>
                      <h3 className='text-capitalize fs-xxl-2 fs-xl-2 fs-lg-2 fs-md-2 fs-sm-3 fs-3 fw-bold '>rs: {item.price}</h3>
                    </div>
                    <div className='col-12 my-2 p-0'>
                      <p className='fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5'>{item.description}</p>
                    </div>
                  </div>

                  <div className='row mx-0 py-2'>
                    <div className="col-12 p-0">
                      <h4 className='text-capitalize fs-xxl-2 fs-xl-2 fs-lg-2 fs-md-2 fs-sm-3 fs-3 fw-bold'>size</h4>
                    </div>
                    <div className="col-6 ms-2 d-grid my-1 ps-3" style={{gridTemplateColumns: 'auto auto'}}>
                      {/* <ul className='d-grid list-unstyled mx-auto justify-content-center' style={{gridTemplateColumns: 'auto auto'}}> */}
                        {
                          sizesLi.map((item:any,key:any)=>{
                            return(

                              <div className='' key={key}>
                                <input type="radio" id="sizes" name="sizes" />
                                <label className='ps-1 fs-xxl-6 fs-xl-6 fs-7' htmlFor='sizes'>{item.size}</label>
                              </div>
                            )
                          })
                        }
                      {/* </ul> */}
                    </div>
                  </div>

                  <div className='row mx-0 my-1 py-2'>
                    <div className="col-12 p-0">
                      <h4 className='text-capitalize fs-xxl-2 fs-xl-2 fs-lg-2 fs-md-2 fs-sm-3 fs-3 fw-bold'>colors</h4>
                    </div>
                    <div className={`${styles.colorCont} col-12 ms-2 my-1 ps-3 `} ref={ref}>
                        <div className={`${styles.colorItem} rounded-circle me-xxl-5 me-xl-5 me-lg-5 me-md-4 me-sm-3 me-3 my-2 p-2 btn`} style={{ ["background-color" as any]: item.colors[0], height:'20px', width:'20px' }}></div>
                        <div className={`${styles.colorItem} rounded-circle mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-4 mx-sm-3 mx-3 my-2 p-2 btn`} style={{ ["background-color" as any]: item.colors[1], height:'20px', width:'20px' }}></div>
                        <div className={`${styles.colorItem} rounded-circle mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-4 mx-sm-3 mx-3 my-2 p-2 btn`} style={{ ["background-color" as any]: item.colors[2], height:'20px', width:'20px' }}></div>
                        <div className={`${styles.colorItem} rounded-circle mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-4 mx-sm-3 mx-3 my-2 p-2 btn`} style={{ ["background-color" as any]: item.colors[3], height:'20px', width:'20px' }}></div>
                      {/* </div> */}
                    </div>
                  </div>

                  <div className='row mx-0 my-1 py-2'>
                    <div className="col-12 p-0">
                      <h4 className='text-capitalize fs-xxl-2 fs-xl-2 fs-lg-2 fs-md-2 fs-sm-3 fs-3 fw-bold '>materials</h4>
                    </div>
                    <div className="col-12 p-0">
                      <p className='ms-2 my-1 ps-3 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5'>{item.materials}</p>
                    </div>
                  </div>

                  <div className='row mx-0 my-1 p-2 d-flex align-items-center justify-content-xxl-start justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-evenly justify-content-evenly'>
                    
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5  px-3' >
                      <div className="row mx-0 rounded-pill d-flex align-items-center justify-content-between " style={{border: '1px solid rgba(171, 93, 2, 1)'}}>
                        
                        <i className="bi bi-dash w-auto btn p-1 w-auto fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                        {value>0? setValue(value-1): 0}
                        }}></i>
                        
                        <input className=' m-0 p-0 bg-transparent border-0 text-center my-auto fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5 w-50' type="text" value={value} min={0} />

                        <i className="bi bi-plus w-auto btn p-1 fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5" onClick={()=>{
                        setValue(value+1)
                        }}></i>
                      </div>
                    </div>        
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4 rounded-pill border border-black text-center ms-3  " style={{background: 'rgba(246, 183, 80, 1)',width:'fit-content'}}>
                      <button className='btn d-flex align-items-center justify-content-center m-auto p-1 p-sm-1 p-md-2'>
                        <i className="bi bi-cart3 me-2 p-0"></i>
                        <p className='p-0 m-0 text-capitalize fs-7 fs-sm-6 fs-md-6 fs-lg-6 fs-xl-6 fs-xxl-5'>add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='mx-0 my-1 p-2 ' >
                    <div className="col-12">
                      <Link href={`/mens/${item.itemId}&${item.name}/pay`} className='btn text-capitalize text-white fw-bold fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 m-0 p-1 w-50' style={{background:'rgba(171, 93, 2, 1)'}}>
                        pay now
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

              <div className={`${styles.relatedItems} row d-flex align-items-center justify-content-center`}>

                <h1 className='text-uppercase fs-4 fs-sm-2 fs-md-1 fs-lg-1 fs-xl-1 fs-xxl-1 fw-bold text-center'>related items</h1>
                <p className='h5 fw-normal text-capitalize mb-4 fs-7 fs-sm-6 fs-md-5 fs-lg-6 fs-xl-5 fs-xxl-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                {
                    items.map((item:any, key:any)=>{
                      return(
                        <div className={`${styles.itemContainer} col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5 m-xxl-5 mx-3 my-2 m-sm-2 m-md-2 p-0 h-100 `} key={key}>
                          <div className={`${styles.imageContainer} row mx-0 d-flex align-items-center m-0 p-0 position-relative`}>
                            <Image src={item.name} alt='item' className={`${styles.image} img-fluid object-fit-cover m-0 p-0 rounded-3 `}/>
                            {
                              item.favourite? <i className={`${styles.heart} bi bi-heart-fill position-absolute fs-xxl-5 btn m-0 p-0 w-auto rounded-circle bg-white px-1 py-0`} onClick={()=>{
                                toggleFavourite(item.id)
                              }}></i> : <i className={`${styles.heart} bi bi-heart  position-absolute fs-xxl-5 btn m-0 p-0 w-auto rounded-circle bg-white px-1 py-0`} onClick={()=>{
                                toggleFavourite(item.id)
                              }}></i>
                            }
                            <div className={`${styles.addToCart} row btn rounded-0 mx-0 position-absolute bottom-0 d-flex align-items-center justify-content-center text-white p-xxl-3 p-xl-3 p-lg-3 p-2 w-100`} style={{background:'rgba(171, 93, 2, 0.66)'}}>
                              <i className="bi bi-cart3 w-auto ps-0 pe-2 fs-xxl-6"></i>
                              <p className='w-auto p-0 m-0 text-capitalize fs-xxl-6'>add to cart</p>
                            </div>      
                          </div>
                          <div className={`${styles.itemDes} row mx-0 d-flex align-items-center justify-content-between position-relative bg-white`} >
                            <p className='text-start fs-6 fs-sm-6 fs-xxl-5 fs-xl-5 fs-lg-5 p-0 mb-0 position-absolute top-0' style={{color:'#5A5A5A'}}>{item.des}</p>
                            <p className='text-start fw-bold p-0 fs-6 fs-sm-5 fs-xxl-4 fs-xl-4 fs-lg-4 mb-0 position-absolute bottom-0' style={{color:'#5A5A5A'}}>{item.price}</p>
                          </div>
                        </div>
                      )
                    })
                  }

              </div>

              <div className='row my-3'>
                <Footer />
              </div>

            </div>
            
          ):null
        ))
      }
    </>
  )
}

export default MensItem