import React from 'react';
import { Box, Chip } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';

function Tags(props) {
  const categories = [];
  const mechanics = [];

  if (props && props.game) {
    if (props.game.categories && props.game.categories.length) {
      props.game.categories.forEach((item) => {
        categories.push(item);
      });
    }
    if (props.game.mechanics && props.game.mechanics.length) {
      props.game.mechanics.forEach((item) => {
        mechanics.push(item);
      });
    }
  }

  if (categories.length || mechanics.length) {
    return (
      <Box style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        {categories.map((category) => (
          <Chip icon={<CategoryIcon />} label={category} color="info" />
        ))}
        {mechanics.map((mechanic) => (
          <Chip icon={<SettingsIcon />} label={mechanic} color="info" />
        ))}
      </Box>
    );
  }
}

export default Tags;