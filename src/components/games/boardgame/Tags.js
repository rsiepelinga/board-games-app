import React from 'react';
import { Box, Chip } from '@mui/material';
import cleanString from '../../utils';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';

function Tags(props) {
  var categories = [];
  var mechanics = [];

  if (props && props.game) {
    if (props.game.categories && props.game.categories.length) {
      props.game.categories.forEach(item => {
        categories.push(cleanString(item));
      })
    }
    if (props.game.mechanics && props.game.mechanics.length) {
      props.game.mechanics.forEach(item => {
        mechanics.push(cleanString(item));
      })
    }
  } 

  if (categories.length || mechanics.length) {
    return (
      <Box style={{paddingTop: '10px', paddingBottom: '10px'}}>
        {categories.map((category) => (
          <Chip icon={<CategoryIcon/>} label={category} color="info"/>
        ))}
        {mechanics.map((mechanic) => (
          <Chip icon={<SettingsIcon/>} label={mechanic} color="info" />
        ))}
      </Box>
    )
  } 
}

export default Tags;