import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    
    type="button"
    alignItems="center"
    justifyContent="center"
    className=" app__bg bodyPart-card"
    sx={bodyPart === item ? { color:'#fff' ,borderTop: '4px solid #FF2625', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { color:'#fff' ,borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" color='#fff' fontWeight="bold" fontFamily="Kanit"  textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
