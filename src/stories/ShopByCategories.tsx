'use client'
import React from 'react';
import forMens from '../../public/forMens.svg';
import forKids from '../../public/forKids.svg';
import forWomens from '../../public/forWomens.svg';
import rightArrow2 from '../../public/rightArrow2.svg';
import Image from "next/image";
import './ShopByCategories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ShopByCategoriesC from '@/components/Home/Shop By Categories/ShopByCategories';

const SliderView = ()=>{
  return(
    <div className='slide_card_content'>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            
              <SwiperSlide className='card_wrapper'>
                <article className='card_article'>
                  <div className='card_image'>
                    <Image src={forMens} alt="forMens" className='card_img' />
                    <div className='card_shadow'></div>
                  </div>

                  <div className='card_data'>
                    <h3 className='card_name'></h3>
                    <p className='card_description'>
                      <ul>
                        <li>t-shirts & shirts</li>
                        <li>jeans</li>
                        <li>jacket & coats</li>
                        <li>shorts</li>
                      </ul>
                    </p>
                    <a href="" className='card_button'>show more</a>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide className='card_wrapper'>
                <article className='card_article'>
                  <div className='card_image'>
                    <Image src={forWomens} alt="forWomens" className='card_img' />
                    <div className='card_shadow'></div>
                  </div>

                  <div className='card_data'>
                    <h3 className='card_name'></h3>
                    <p className='card_description'>
                    <ul>
                        <li>dresses</li>
                        <li>sarees</li>
                        <li>t-shirts and blouses</li>
                        <li>jackets & coats</li>
                        <li>jeans</li>
                        <li>knit</li>
                      </ul>
                    </p>
                    <a href="" className='card_button'>show more</a>
                  </div>
                </article>
              </SwiperSlide>
              <SwiperSlide className='card_wrapper'>
                <article className='card_article'>
                  <div className='card_image'>
                    <Image src={forKids} alt="forKids" className='card_img' />
                    <div className='card_shadow'></div>
                  </div>

                  <div className='card_data'>
                    <h3 className='card_name'></h3>
                    <p className='card_description'>
                    <ul>
                      <li>t-shirts & shirts</li>
                      <li>jeans</li>
                      <li>jacket & coats</li>
                      <li>shorts</li>
                    </ul>
                    </p>
                    <a href="" className='card_button'>show more</a>
                  </div>
                </article>
              </SwiperSlide>
            </Swiper>
    </div>
  )
}

interface ShopByProps{
  view: 'normal'|'slide'
}

const ShopByCategories = ({
  view='normal'
}:ShopByProps)=>{

  return(
    <> 
      {
        view==='slide'?<SliderView/>:<ShopByCategoriesC/>
      }
    </>

  )
}

export default ShopByCategories;