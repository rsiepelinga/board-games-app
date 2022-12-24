import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Grid, IconButton, Typography
} from '@mui/material';
import DnsIcon from '@mui/icons-material/Dns';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import WindowIcon from '@mui/icons-material/Window';
import LibraryCardSimple from './LibraryCardSimple';
import LibraryCardExpanded from './LibraryCardExpanded';
import LibraryCardDetailed from './LibraryCardDetailed';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardType: 'simple'
    };
  }

  handleChangeView(view) {
    this.setState({
      cardType: view
    });
  }

  render() {
    const { collection, title } = this.props;
    const { cardType } = this.state;

    return (
      <Container>
        <Grid container style={{ display: 'inline-flex' }}>
          <Grid xs={12}>
            <Typography variant="h4">
              {title}
            </Typography>
          </Grid>

          <Grid xs={12} style={{ textAlign: 'right' }}>
            <IconButton onClick={() => this.handleChangeView('simple')}>
              <WindowIcon color={cardType === 'simple' ? 'white' : 'info'} />
            </IconButton>
            <IconButton onClick={() => this.handleChangeView('detailed')}>
              <DnsIcon color={cardType === 'detailed' ? 'white' : 'info'} />
            </IconButton>
            <IconButton onClick={() => this.handleChangeView('expanded')}>
              <FeaturedVideoIcon color={cardType === 'expanded' ? 'white' : 'info'} />
            </IconButton>
          </Grid>

          {/* Results */}
          {collection.map((game) => (
            <Grid xs={12} md={6} lg={4}>
              { cardType === 'simple' && <LibraryCardSimple key={game.id} game={game} /> }
              { cardType === 'detailed' && <LibraryCardDetailed key={game.id} game={game} /> }
              { cardType === 'expanded' && <LibraryCardExpanded key={game.id} game={game} /> }
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