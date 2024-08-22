'use client';
import styles from './Sizes.module.scss';
import { sizesLi } from './SizesList';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Sizes = () => {
  const {theme} = useTheme();
  return (

    <div className='row text-capitalize p-1 mx-1 my-3  '>
      <div className="col-12">
        <p className='fs-xxl-5 fs-xl-6 fs-lg-6 fw-bold'>sizes</p>
        <ul className='d-grid list-unstyled' style={{gridTemplateColumns: 'auto auto'}}>
          {
            sizesLi.map((item:any,key:any)=>{
              return(

                <div className='px-xxl-4 px-xl-3 pl-lg-3  py-1' key={key}>
                  <input type="radio" id="sizes" name="sizes" />
                  <label className='ps-1 fs-xxl-6 fs-xl-6 fs-lg-7' htmlFor='sizes'>{item.size}</label>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Sizes