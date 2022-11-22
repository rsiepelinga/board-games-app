import React from 'react';
import {
  Box, Container, Grid, Typography
} from '@mui/material';
import DetailedCard from './DetailedCard.js';

function Library(props) {
  return (
    <Container>
      <Box>
        <Typography variant="h4">
          {props.title}
        </Typography>
      </Box>

      {/* Results */}
      <Grid container style={{ display: 'inline-flex' }}>
        {props.collection.map((game) => (
          <Grid xs={12} md={6} lg={4}>
            <DetailedCard key={game.id} game={game} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Library;