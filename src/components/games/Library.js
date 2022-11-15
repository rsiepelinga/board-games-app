import React from 'react';
import DetailedCard from './DetailedCard.js';
import { Container, Box, Typography } from '@mui/material';


function Library(props) {
  return (
    <Container maxWidth="sm">
      {/* Title */}
      <Typography variant="h4">
        {props.title}
      </Typography>

      {/* Results */}
      <Box style={{maxWdith: '100%'}}>
        <Box style={{display: 'block'}}>
          {props.collection.map((game) => (
            <DetailedCard key={game.id} game={game}/>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Library;