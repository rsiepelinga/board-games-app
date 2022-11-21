import React from 'react';
import { Box, Typography, Skeleton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import cleanString from '../../utils';

function Details(props) {
  var isLoading = true;
  var name;
  var rating;
  var players;
  var duration;
  
  if (props && props.game && props.game.name) {
    name = cleanString(props.game.name)
    rating = Number.parseFloat(props.game.rating).toFixed(2);
    players = props.game.min_players === props.game.max_players ? props.game.min_players : props.game.min_players + '-' + props.game.max_players;
    duration = props.game.min_duration === props.game.max_duration ? props.game.min_duration : props.game.min_duration + '-' + props.game.max_duration;
    isLoading = false;
  }
  
  return (      
    <Box>
      <Typography variant="h2">{isLoading ? <Skeleton /> : name}</Typography>
      <Box style={{paddingTop: '10px', display: 'flex',alignItems: 'center', flexWrap: 'wrap'}}>
        <StarIcon color="secondary" style={{marginRight: '10px'}}/>
        <Typography variant="p">{isLoading ? <Skeleton /> : rating + ' / 10'}</Typography>
      </Box>
      <Box style={{paddingTop: '10px', display: 'flex',alignItems: 'center', flexWrap: 'wrap'}}>
        <PersonIcon color="secondary" style={{marginRight: '10px'}}/>
        <Typography variant="p">{isLoading ? <Skeleton /> : players + ' players'}</Typography>
      </Box>
      <Box style={{paddingTop: '10px', display: 'flex',alignItems: 'center', flexWrap: 'wrap'}}>
        <AccessTimeIcon color="secondary" style={{marginRight: '10px'}}/>
        <Typography variant="p">{isLoading ? <Skeleton /> : duration + ' minutes'}</Typography>
      </Box>
    </Box>
  )
}

export default Details;