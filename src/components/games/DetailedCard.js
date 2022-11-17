import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

function DetailedCard(props) {
  
  const style = {
    container: {
      padding: '10px 0',
      display: 'flex',
      maxWidth: '100%',
      textDecoration: 'none'
    },
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '10px'
    },
    left: {
      paddingRight: '10px'
    },
    right: {
      color: '#fff',
      fontSize: '11px'
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '5px',
      fontSize: '14px'
    }
  }
  
  return (
    <Box style={style.container} component={Link} to={"/game/" + props.game.id}>
      {/* Left Column */}
      <div style={style.left}>
        <img 
          style={style.image} 
          src={props.game.image_url} 
          alt={props.game.name} 
          component={Link} to={"/game/" + props.game.id}
        />
      </div>

      {/* Right Column */}
      <div style={style.right}>
        <div style={style.title}>{props.game.name}<br/></div>
        <Chip 
          icon={<StarIcon/>} 
          label={props.game.rating}
          size="small" 
          color="info" 
          variant="outlined">
        </Chip>
        <Chip 
          icon={<PersonIcon/>} 
          label={props.game.min_players === props.game.max_players ? props.game.min_players : props.game.min_players + '-' + props.game.max_players}
          size="small" 
          color="info" 
          variant="outlined">
        </Chip>
        <Chip 
          icon={<AccessTimeIcon/>} 
          label={props.game.min_duration === props.game.max_duration ? props.game.min_duration : props.game.min_duration + '-' + props.game.max_duration}
          size="small" 
          color="info" 
          variant="outlined">
        </Chip>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </Box>
    )
  }
  
  export default DetailedCard;