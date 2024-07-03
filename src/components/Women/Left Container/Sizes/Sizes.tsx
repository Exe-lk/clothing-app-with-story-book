'use client';
import styles from './Sizes.module.scss';
import { sizesLi } from './SizesList';
import React from 'react';
import { useTheme } from '@/components/ThemeContext';

const Sizes = () => {
  const {theme} = useTheme();
  return (
    // <div className={`${styles.sizes} ${theme==='dark'?styles.darkSizes:''}`}>
    //   <p>sizes</p>
    //   <ul>
    //     {
    //       sizesLi.map(i=>{
    //         return(
    //           // <li>{i.item}</li>
    //           <div className={styles.range}>
    //             <input type="radio" id="sizes" name="sizes" />
    //             <label>{i.size}</label>
    //           </div>
    //         )
    //       })
    //     }
    //   </ul>
    // </div>

    <div className='p-1 m-1 text-capitalize'>
      <p>sizes</p>
      <ul className='d-grid list-unstyled' style={{gridTemplateColumns: 'auto auto'}}>
        {
          sizesLi.map(i=>{
            return(

              <div className='px-4 py-1'>
                <input type="radio" id="sizes" name="sizes" />
                <label className='ps-1'>{i.size}</label>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sizes