import React from 'react';
import { Skeleton } from '@mui/material';

function Image(props) {

  if (props.game) {
    return (
      <img src={props.game.image_url} alt={props.game.name} width="100%"/>
    )
  } 
  return (
    <Skeleton variant="rectangular" width="100%" height={150} />
  );
}

export default Image;