import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card app__bg" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} style={{ background:'#545454',opacity:'0.90',borderBottomRightRadius:'2%',borderBottomLeftRadius:'2%' }}alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button className='exer_button' sx={{ ml: '21px', color: 'black', background: '#FF7800', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button className='exer_button' sx={{ ml: '21px', color: 'black', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#fff" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
