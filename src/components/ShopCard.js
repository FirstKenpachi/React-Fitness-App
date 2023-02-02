import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';

const ShopCard = ({ item }) => (
  <Link className="shop_card app__bg" to={`/shop/${item.id}`}>
    <img src={item.img} style={{ background:'#545454',opacity:'0.90',borderBottomRightRadius:'2%',borderBottomLeftRadius:'2%' }} alt={item.name} loading="lazy" />
    {/* {console.log(item)} */}
    <Stack className='shopitem' direction='row' sx={{justifyContent:"space-between"}}>
      <Typography ml="21px" color="#fff" fontFamily='Kanit'  sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" mb='12px' pb="10px" textTransform="capitalize">
        {item.name}
      </Typography>
      <Typography ml="21px" color="#FF2625" fontFamily='Kanit'  sx={{ fontSize: { lg: '20px', xs: '17px' } }} mt="11px" mb='12px' pb="10px" textTransform="capitalize" >
        {item.cost}

        
      </Typography>

      </Stack>
    

        
    
    <Stack>
       <Button className='exer_button' sx={{ ml: '21px', color: 'black', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
         Add to Cart
       </Button>

    </Stack>
    
  
  
  
   
  </Link>

);

export default ShopCard;