'use client';

import styles from './page.module.scss';
import React from 'react';
import SideBar from '@/components/Side Bar/SideBar';
import { MdOutlineRoundedCorner } from "react-icons/md";
import Rounded from '@/components/Button Component/Rounded';
import { SlSizeFullscreen } from "react-icons/sl";
import Size from '@/components/Button Component/Size';
import { IoIosColorFill } from "react-icons/io";
import BColor from '@/components/Button Component/BColor';
import { RiShadowLine } from "react-icons/ri";
import Shadow from '@/components/Button Component/Shadow';
import { useTheme } from '@/components/ThemeContext';

const page = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.wrapper} ${theme==='dark'?styles.darkWrapper:''}`}>
      <div className={styles.aside}>
        <SideBar />
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonCode}>
          <code>
            <p className={styles.line1}>{`<Button \n`}</p>

            <p className={styles.property}> {`label= ` } 
              <span className={styles.punc}>{`{`}</span> 
                <span className={styles.value}>{`String`}</span> 
              <span className={styles.punc}>{`}`}</span>
            </p>

            <p className={styles.property}> {`rounded= `} 
              <span className={styles.punc}>{`{`}</span> 
                <span className={styles.value}>{`String`}</span> 
              <span className={styles.punc}>{`}`}</span> 
              <span className={styles.comment}>{` // "default" || "top"|| "bottom"|| "rounded10"|| "rounded50"|| "circle"`}</span>{`\n`}   
            </p>

            <p className={styles.property}> {`size= `} 
              <span className={styles.punc}>{`{`}</span> 
                <span className={styles.value}>{`String`}</span> 
              <span className={styles.punc}>{`}`}</span> 
              <span className={styles.comment}>{` // "sm" || "md" || "lg"`}</span>{`\n`}  
            </p>

            <p className={styles.property}> {`shadow=` } 
              <span className={styles.punc}>{`{`}</span>  
                <span className={styles.value}>{`String`}</span> 
              <span className={styles.punc}>{`}`}</span> 
              <span className={styles.comment}>{` // "none" || "small"|| "medium"|| "large""`}</span>{`\n`}
            </p>

            <p className={styles.property}> {`backgroundColor= ` } 
              <span className={styles.punc}>{`{`}</span> 
                <span className={styles.value}>{`String`}</span> 
              <span className={styles.punc}>{`}`}</span> {`\n`} 
            </p>

            <p className={styles.property}>
              <span className={styles.punc}>{`{`}</span> 
                {`...props`}
              <span className={styles.punc}>{`}`}</span> {`\n`} 
            </p>

            <p className={styles.line7}>{`/> \n`}</p>
          </code>
        </div>
        <div className={styles.buttonDes}>
          <div className={`${styles.rounded} ${styles.property}`}>
            <div className={styles.heading}>
              <MdOutlineRoundedCorner className={styles.headingIcon}/>
              <p><b>rounded</b> <br/> Button</p>
            </div>
            <Rounded />
          </div>
          <div className={`${styles.size} ${styles.property}`}>
          <div className={styles.heading}>
              <SlSizeFullscreen className={styles.headingIcon}/>
              <p><b>size</b> <br/> Button</p>
            </div>
            <Size />
          </div>
          <div className={`${styles.color} ${styles.property}`}>
          <div className={styles.heading}>
              <RiShadowLine className={styles.headingIcon}/>
              <p><b>shadow</b> <br/> Button</p>
            </div>
            <Shadow />
          </div>
          <div className={`${styles.bColor} ${styles.property}`}>
          <div className={styles.heading}>
              <IoIosColorFill className={styles.headingIcon}/>
              <p><b>background color</b> <br/> Button</p>
            </div>
            <BColor />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page