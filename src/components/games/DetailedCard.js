import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import cleanString from '../utils';

function DetailedCard(props) {  
  var game_name;
  var rating;

  if (props && props.game && props.game.name) {
    rating = Number.parseFloat(props.game.rating).toFixed(2);
    game_name = cleanString(props.game.name);
  }

  
  return (
    <Grid container component={Link} to={"/game/" + props.game.id} style={{textDecoration: 'none', paddingBottom: '10px'}}>
      {/* Left Column */}
      <Grid xs={4} style={{textAlign: 'center', verticalAlign: 'center'}}>
        <img 
          src={props.game.image_url} 
          alt={game_name} 
          component={Link} to={"/game/" + props.game.id}
          width={100}
          height={100}
          style={{objectFit: 'cover', borderRadius: '10px', maxHeight: '100%', maxWidth: '100%'}}
        />
      </Grid>

      <Grid xs={8} style={{paddingLeft: '10px'}}>
        <Box>
          <Typography variant="h5">{game_name}<span style={{fontWeight: 'normal'}}>&nbsp;({props.game.year_published})</span></Typography>
        </Box>
        <Box>
          <Chip 
            icon={<StarIcon/>} 
            label={rating}
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
        </Box>
      </Grid>
    </Grid>
    )
  }
  
  export default DetailedCard;