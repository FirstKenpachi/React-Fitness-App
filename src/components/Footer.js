import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo2.png';

const Footer = () => (
  <Box   mt="80px" bgcolor="#0C0C0C" style={{display:'flex',alignItems:'center',justifyContent:'center'}} mb='25px'>
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" >
      <img src={Logo} alt="logo" style={{ width: '200px' }} />
    </Stack>
    <Typography variant="h5" fontFamily={'Kanit'} sx={{ fontSize: { lg: '28px', xs: '20px' },color:'#fff'}} mt="41px" textAlign="center" pb="40px">JIM</Typography>
  </Box>
);

export default Footer;
