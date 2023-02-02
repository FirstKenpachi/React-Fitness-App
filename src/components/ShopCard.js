import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ShopCard = ({ item }) => (
  <Link className="shop_card app__bg" to={`/shop/${item.id}`}>
    <img src={item.img} style={{ background:'#545454',opacity:'0.90',borderBottomRightRadius:'2%',borderBottomLeftRadius:'2%' }} alt={item.name} loading="lazy" />
  
    <Typography ml="21px" color="#fff" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {item.name}
    </Typography>

    <Button className='exer_button' sx={{ ml: '21px', color: 'black', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {item.cost}
    </Button>
  </Link>
);

export default ShopCard;