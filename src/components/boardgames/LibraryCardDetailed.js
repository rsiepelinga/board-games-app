import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

class LibraryCardDetailed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { game } = this.props;
    const { details, image_url, tags } = game;
    const {
      id, name, year_published, duration, players, rating
    } = details;

    return (
      <Grid container component={Link} to={`/boardgame/${id}`} style={{ textDecoration: 'none', paddingBottom: '10px' }}>
        {/* Left Column */}
        <Grid xs={5} style={{ textAlign: 'center', verticalAlign: 'center' }}>
          <img
            src={image_url}
            alt={name}
            width={125}
            height={125}
            style={{
              objectFit: 'cover', borderRadius: '10px', maxHeight: '100%', maxWidth: '100%'
            }}
          />
        </Grid>

        <Grid xs={7} style={{ paddingLeft: '10px' }}>
          <Box>
            <Typography variant="h5">
              {name}
              <span style={{ fontWeight: 'normal' }}>{` (${year_published})`}</span>
            </Typography>
          </Box>
          <Box>
            <Chip icon={<StarIcon />} label={rating} size="small" color="info" variant="outlined" />
            <Chip icon={<PersonIcon />} label={players} size="small" color="info" variant="outlined" />
            <Chip icon={<AccessTimeIcon />} label={duration} size="small" color="info" variant="outlined" />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

LibraryCardDetailed.propTypes = {
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
  }).isRequired
};

export default LibraryCardDetailed;