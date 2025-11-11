// import { Link } from "react-router"
import logo from '../assets/logo.png'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router'
import { useSelector } from 'react-redux';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';


import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const drawerWidth = 240;


Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export function Header(props){

    const {totalQuantity} = useSelector((state)=> state.CartDetails);

    const ItemsInCart = totalQuantity>0 ? totalQuantity: 0;


const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
        <Link to="/" className='flex justify-center' >
                <img src={logo} alt="Logo" width="70" height="70" className='mx-4 my-3'  />     
        </Link>
      
      <Divider />
      <List>
          <Box sx={{mt: "3rem", textAlign:'start', paddingLeft:"2rem"}}> <Link to="/" className='font-[raleway] font-bold text-center'> Home </Link> </Box>
          <Box sx={{mt: "2rem", textAlign:'start', paddingLeft:"2rem"}}> <Link to="/products" className='font-[raleway] font-bold text-center'> All Products </Link> </Box>
          <Box sx={{mt: "2rem", textAlign:'start', paddingLeft:"2rem"}}> <Link to="/complain" className='font-[raleway] font-bold text-center'> Register Complain </Link> </Box>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

      <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar component="nav" sx={{position:'relative'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {  xs: 'flex' }, justifyContent:{xs:'center', sm:'start'}}}
          >
            <Link to="/">
                <img src={logo} alt="Logo" width="60" height="60" />     
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             <Link to="/products" className='font-[raleway] font-bold mr-5'> All Products </Link>
             <Link to="/complain" className='font-[raleway] font-bold mr-7'> Register Complain </Link>
          </Box>

            
             <Link to="/cart" className='font-[raleway] font-bold'>
              
                 <IconButton  sx={{display: { xs: 'flex' }, justifyContent:{xs:'end',}}}>
                    <ShoppingCartIcon fontSize="large" className='color-[#2F4F3F]' />
                    <CartBadge badgeContent={ItemsInCart} color="primary" overlap="circular" />
                 </IconButton>
                
           
              </Link>
           
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
  
  
}




