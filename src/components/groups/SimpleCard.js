import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SimpleCard(props) {
  const style = {
    backgroundColor: '#4f5d75',
    textDecoration: 'none',
    borderRadius: '10px',
    height: '150px',
    width: '100%',
    boxSizing: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'text-bottom'
  };

  return (
    <Box component={Link} to={`/group/${props.group.id}`} style={style}>
      <Typography variant="h5" style={{ textAlign: 'center', width: '100%' }}>{props.group.name}</Typography>
    </Box>
  );
}

export default SimpleCard;