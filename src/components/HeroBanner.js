import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/hero2.jpg';

const HeroBanner = () => (
  <Box   sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    
    <Typography color="#DCCA87" fontFamily='Kanit'  fontWeight={700} sx={{ fontSize: { lg: '55px', xs: '40px' },fontStyle:'italic' }} mb="23px" mt="11px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography  fontSize="22px" color="white" fontFamily="Open Sans" lineHeight="35px" fontWeight='300'>
      Check out the most effective exercises personalized for you
    </Typography>
    <Stack>
      <a className='panchi' href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', padding: '14px', fontSize: '18px', textTransform: 'none', color: 'white', borderRadius: '4px',fontFamily:'Open Sans',fontWeight:'400'}}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#ffffffe0" sx={{ display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
