import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Chip from '@mui/material/Chip';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import PersonIcon from '@mui/icons-material/Person';
// import StarIcon from '@mui/icons-material/Star';

class RatingCard extends React.Component {
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
      }
    };

    const { game } = this.props;
    const { bid, details, ratings } = game;

    return (
      <Box style={{ padding: '15px' }} key={bid}>
        <Grid container component={Link} to={`/boardgame/${bid}`} style={style.card}>
          <Grid xs={12} sm={8}>
            <Box display={{ xs: 'block' }} style={{ textAlign: 'center' }}>
              <Typography variant="h5">
                {details.name}
                <span style={{ fontWeight: 'normal' }}>
                  {` (${details.year_published})`}
                </span>
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12}>
            <Box style={{ height: '85px', paddingTop: '10px' }}>
              {ratings.map((rating) => (
                <Typography variant="tags">
                  <b>
                    {rating.user}
                    :
                    {' '}
                  </b>
                  {rating.rating}
                </Typography>
              ))}
              <br />
              <b>
                The Group&apos;s Average Rating:
                {' '}
                {game.statistics.mean_rating}
                {' '}
              </b>
            </Box>
          </Grid>

        </Grid>
      </Box>
    );
  }
}

RatingCard.propTypes = {
  game: PropTypes.shape({
    bid: PropTypes.string,
    details: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      year_published: PropTypes.number,
      min_duration: PropTypes.string,
      max_duration: PropTypes.string,
      duration: PropTypes.string,
      min_players: PropTypes.string,
      max_players: PropTypes.string,
      players: PropTypes.string,
      weight: PropTypes.string,
      rating: PropTypes.string
    }),
    ratings: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string,
      rating: PropTypes.string
    })),
    statistics: PropTypes.shape({
      number_rated: PropTypes.number,
      mean_rating: PropTypes.number
    })
  }).isRequired
};

export default RatingCard;