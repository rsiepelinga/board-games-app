/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function SimpleCard(props) {
  const style = {
    container: {
      padding: '10px 10px 10px 0'
    },
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '10px'
    }
  };

  return (
    <Box style={style.container} component={Link} to={`/game/${props.game.id}`}>
      <img
        style={style.image}
        src={props.game.image_url}
        alt={props.game.name}
      />
    </Box>
  );
}

export default SimpleCard;