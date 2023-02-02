import React from 'react'
import {Box,Stack,Typography} from '@mui/material';

import ShopCard from '../components/ExerciseCard';
import { shopArray } from '../utils/fetch';


const ShopPage = () => {
  return (
    <Box id="shop" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
     <Typography variant="h4" fontWeight="bold" fontFamily={'Kanit'} sx={{ color: '#fff', fontSize: { lg: '50px', xs: '30px' } }} mb="46px">Shop</Typography>
     <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
       {shopArray.map((item, idx) => (
         <ShopCard key={idx} item={item} />
       ))}
     </Stack>
    </Box>
  )
}

export default ShopPage;
