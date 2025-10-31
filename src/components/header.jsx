import React from 'react'
// import { Link } from "react-router"
import logo from '../assets/logo.png'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router'
import { useSelector } from 'react-redux';



export function Header(){

    const {totalQuantity} = useSelector((state)=> state.CartDetails)

const theme = createTheme({
  palette: {
    ochre: {
      main: '#5bd7ddff',
      light: '#E3FDFD',
      dark: '#A6E3E9',
      contrastText: '#fff',
    },
  },
});

  return (
           <div className='py-3 px-8 bg-[#E3FDFD] flex justify-between items-center text-black mb-10'>
              <Link to="/">
                <img src={logo} alt="Logo" width="70" height="70"/>     
              </Link>

            <div className='space-x-8'>        
             <Link to="/products" className='font-[raleway] font-bold'> All Products </Link>
             <Link to="/complain" className='font-[raleway] font-bold'> Register Complain </Link>
             <ThemeProvider theme={theme}>
             <Link to="/cart" className='font-[raleway] font-bold'>
              <Button variant="contained" color='ochre'>Cart {`(${totalQuantity>0?totalQuantity: 0})`}</Button>
              </Link>
             </ThemeProvider>
            </div>
             

           </div>
  

  )
}