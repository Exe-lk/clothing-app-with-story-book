import React from "react";
import './Button1.css';

interface buttonProps{
  label?: String,
  size?: 'small'|'medium'|'large',
  backgroundC?: String,
  rounded?: 'yes'|'no',
}

export const Button1 = ({
  label= 'click',
  size= 'medium',
  backgroundC,
  rounded,
  ...props
}: buttonProps)=>{

  return(
    <button type="button" className={['button', `button-${size}-${rounded}`, ].join(' ')} {...props}>
      {label}
      <style>
        { `
        button{
          background-color: ${backgroundC}
        }
        `}
      </style>
    </button>
  )
}