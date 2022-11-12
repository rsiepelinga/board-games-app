import React from 'react';
import DetailedCard from './DetailedCard.js';
import { Container, Typography } from '@mui/material';


function Library(props) {
  return (
    <Container maxWidth="sm">
      {/* Title */}
      <Typography variant="h4">
        {props.title}
      </Typography>

      {/* Results */}
      <div style={{maxWdith: '100%'}}>
        <div style={{display: 'block'}}>
          {props.collection.map((game) => (
            <DetailedCard key={game.id} game={game}/>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Library;