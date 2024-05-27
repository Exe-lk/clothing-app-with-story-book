import React from "react";
import './SearchBar.css'

interface SearchBarProps {
  color?: String, 
  backgroundColor?: String
  placeholder: string
}

export const SearchBar = (
  {
    color= '#FFF',
    backgroundColor,
    placeholder,
    ...props
  }:SearchBarProps
)=>{
  return(
    <>
      <input type="text" placeholder={placeholder} className={`searchBar`}/>
      <style jsx>{`
        input {
          background-color: ${backgroundColor};
          color: ${color};
        }
      `}</style>
    </>
  )
}