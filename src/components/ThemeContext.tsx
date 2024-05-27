'use client';
import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: function(value:any){
    return value;
  }
});

export const useTheme = ()=> useContext(ThemeContext);