import React from 'react';
import { Link } from 'react-router-dom';

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
  }

  return (
    <div style={style.container}>
      <img 
        style={style.image} 
        src={props.game.image_url} 
        alt={props.game.name} 
        component={Link} to={"/game/" + props.game.id}
      />
    </div>
  )
}

export default SimpleCard;