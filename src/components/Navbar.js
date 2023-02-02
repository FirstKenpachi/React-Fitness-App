import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo2.png';

const Navbar = () => (
  <Stack  direction="row" alignItems="center" justifyContent="space-around" sx={{  gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '85px', margin: '0px 20px'   }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Open Sans"
      fontSize="20px"
      alignItems="flex-end"
    >
      <Link  to="/" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid #FF2625',fontFamily:'Kanit' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: 'white' ,borderBottom: '3px solid #FF2625',fontFamily:'Kanit' }}>Exercises</a>
      <a href="shop" style={{ textDecoration: 'none', color: 'white' ,borderBottom: '3px solid #FF2625',fontFamily:'Kanit' }}>Shop</a>
    </Stack>
  </Stack>
);

export default Navbar;
