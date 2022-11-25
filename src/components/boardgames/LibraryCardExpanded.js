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

class LibraryCardExpanded extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const style = {
      card: {
        textDecoration: 'none',
        padding: '20px',
        backgroundColor: '#525D73',
        borderRadius: '10px'
      },
      image: {
        objectFit: 'cover', borderRadius: '10px', maxHeight: '100%', maxWidth: '100%'
      }
    };

    const { game } = this.props;
    const { details, image_url, tags } = game;
    const {
      id, name, year_published, duration, players, rating
    } = details;
    const { mechanics } = tags;
    const { card, image } = style;

    return (
      <Box style={{ padding: '15px' }}>
        <Grid container component={Link} to={`/boardgame/${id}`} style={card}>
          <Grid xs={12} sm={4} style={{ textAlign: 'center', verticalAlign: 'center' }}>
            <img
              src={image_url}
              alt={name}
              width={125}
              height={125}
              style={image}
            />
          </Grid>

          <Grid xs={12} sm={8}>
            <Box display={{ xs: 'block', sm: 'none' }} style={{ textAlign: 'center' }}>
              <Typography variant="h5">
                {name}
                <span style={{ fontWeight: 'normal' }}>
                  {` (${year_published})`}
                </span>
              </Typography>
              <Chip
                icon={<StarIcon />}
                label={`${rating} / 10`}
                size="small"
                color="primary"
              />
              <Chip
                icon={<PersonIcon />}
                label={`${players} players `}
                size="small"
                color="primary"
              />
              <Chip
                icon={<AccessTimeIcon />}
                label={`${duration} mins`}
                size="small"
                color="primary"
              />
            </Box>

            <Box display={{ xs: 'none', sm: 'block' }} style={{ paddingLeft: '10px' }}>
              <Typography variant="h5">
                {name}
                <span style={{ fontWeight: 'normal' }}>
                  {` (${year_published})`}
                </span>
              </Typography>
              <Box style={{
                paddingTop: '1px', display: 'flex', alignItems: 'center', flexWrap: 'wrap'
              }}
              >
                <StarIcon color="secondary" style={{ marginRight: '10px' }} />
                <Typography variant="tags">{`${rating} / 10`}</Typography>
              </Box>
              <Box style={{
                paddingTop: '1px', display: 'flex', alignItems: 'center', flexWrap: 'wrap'
              }}
              >
                <PersonIcon color="secondary" style={{ marginRight: '10px' }} />
                <Typography variant="tags">{`${players} players`}</Typography>
              </Box>
              <Box style={{
                paddingTop: '1px', display: 'flex', alignItems: 'center', flexWrap: 'wrap'
              }}
              >
                <AccessTimeIcon color="secondary" style={{ marginRight: '10px' }} />
                <Typography variant="tags">{`${duration} minutes`}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid xs={12}>
            <Box style={{ height: '85px', paddingTop: '10px' }}>
              <Typography variant="tags">
                <b>Mechanics: </b>
                {mechanics.join(', ')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

LibraryCardExpanded.propTypes = {
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

export default LibraryCardExpanded;