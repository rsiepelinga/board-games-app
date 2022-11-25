import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Container, Grid, Typography
} from '@mui/material';
import LibraryCardDetailed from './LibraryCardDetailed';
import LibraryCardExpanded from './LibraryCardExpanded';
import LibraryCardSimple from './LibraryCardSimple';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { collection, title } = this.props;
    const cardType = 'expanded';

    return (
      <Container>
        <Box>
          <Typography variant="h4">
            {title}
          </Typography>
        </Box>

        {/* Results */}
        <Grid container style={{ display: 'inline-flex' }}>
          {collection.map((game) => (
            <Grid xs={12} md={6} lg={4}>
              { cardType === 'detailed' && <LibraryCardDetailed key={game.id} game={game} /> }
              { cardType === 'expanded' && <LibraryCardExpanded key={game.id} game={game} /> }
              { cardType === 'simple' && <LibraryCardSimple key={game.id} game={game} /> }
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

Library.propTypes = {
  title: PropTypes.string.isRequired,
  collection: PropTypes.arrayOf(PropTypes.shape({
    game: PropTypes.shape({
      details: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        year_published: PropTypes.string,
        min_duration: PropTypes.string,
        max_duration: PropTypes.string,
        duration: PropTypes.string,
        min_players: PropTypes.string,
        max_players: PropTypes.string,
        players: PropTypes.string,
        weight: PropTypes.string,
        rating: PropTypes.string
      }),
      image_url: PropTypes.string,
      description: PropTypes.string,
      expansions: PropTypes.arrayOf(PropTypes.string),
      tags: PropTypes.shape({
        categories: PropTypes.arrayOf(PropTypes.string),
        mechanics: PropTypes.arrayOf(PropTypes.string)
      }),
      contributors: PropTypes.shape({
        publishers: PropTypes.arrayOf(PropTypes.string),
        designers: PropTypes.arrayOf(PropTypes.string),
        artists: PropTypes.arrayOf(PropTypes.string)
      })
    })
  })).isRequired
};

export default Library;