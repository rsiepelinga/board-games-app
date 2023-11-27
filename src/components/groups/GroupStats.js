/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

class GroupStats extends React.Component {
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

    const { stats } = this.props;
    const {
      highest_rated, lowest_rated, hottest_take_high, hottest_take_low
    } = stats;

    if (stats.highest_rated) {
      return (
        <Container>
          <Grid container>
            {/* highest rated */}
            <Grid xs={12} sm={6} md={4}>
              <Box style={{ padding: '15px' }}>
                <Grid container style={style.card}>
                  <Grid xs={12} sm={12} md={12} style={{ textAlign: 'center', verticalAlign: 'center' }}>
                    <Box display={{ xs: 'block' }} style={{ textAlign: 'center' }}>
                      <Typography variant="h5">
                        {`Highest Rated: ${highest_rated.name}`}
                        <br />
                      </Typography>
                      {`Rating: ${highest_rated.rating}`}
                      <br />
                      {`Users Rated: ${highest_rated.number_rated}`}
                    </Box>
                    <img
                      src={highest_rated.image_url}
                      alt={highest_rated.name}
                      width={125}
                      height={125}
                      style={{
                        objectFit: 'cover', borderRadius: '10px', maxHeight: '100%', maxWidth: '100%'
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* lowest rated */}
            <Grid xs={12} sm={6} md={4}>
              <Box style={{ padding: '15px' }}>
                <Grid container style={style.card}>
                  <Grid xs={12} sm={12} md={12} style={{ textAlign: 'center', verticalAlign: 'center' }}>
                    <Box display={{ xs: 'block' }} style={{ textAlign: 'center' }}>
                      <Typography variant="h5">
                        {`Lowest Rated: ${lowest_rated.name}`}
                        <br />
                      </Typography>
                      {`Rating: ${lowest_rated.rating}`}
                      <br />
                      {`Users Rated: ${lowest_rated.number_rated}`}
                    </Box>
                    <img
                      src={lowest_rated.image_url}
                      alt={lowest_rated.name}
                      width={125}
                      height={125}
                      style={{
                        objectFit: 'cover', borderRadius: '10px', maxHeight: '100%', maxWidth: '100%'
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Hottest Take rated */}
            <Grid xs={12} sm={6} md={4}>
              <Box style={{ padding: '15px' }}>
                <Grid container style={style.card}>
                  <Grid xs={12} sm={12} md={12} style={{ textAlign: 'center', verticalAlign: 'center' }}>
                    <Box display={{ xs: 'block' }} style={{ textAlign: 'center' }}>
                      <Typography variant="h5">
                        {`Game your group loves more than BGG: ${hottest_take_high.name}`}
                        <br />
                      </Typography>
                      {`Rating: ${hottest_take_high.rating}`}
                      <br />
                      {`BGG Rating: ${hottest_take_high.bgg_rating}`}
                      <br />
                      {`Users Rated: ${hottest_take_high.number_rated}`}
                      <br />
                      {`Difference: ${hottest_take_high.difference}`}
                    </Box>
                    <img
                      src={hottest_take_high.image_url}
                      alt={hottest_take_high.name}
                      width={125}
                      height={125}
                      style={{
                        objectFit: 'cover', borderRadius: '10px', maxHeight: '100%', maxWidth: '100%'
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Lowest Take rated */}
            <Grid xs={12} sm={6} md={4}>
              <Box style={{ padding: '15px' }}>
                <Grid container style={style.card}>
                  <Grid xs={12} sm={12} md={12} style={{ textAlign: 'center', verticalAlign: 'center' }}>
                    <Box display={{ xs: 'block' }} style={{ textAlign: 'center' }}>
                      <Typography variant="h5">
                        {`Game that BGG thinks your group underrates: ${hottest_take_low.name}`}
                        <br />
                      </Typography>
                      {`Rating: ${hottest_take_low.rating}`}
                      <br />
                      {`BGG Rating: ${hottest_take_low.bgg_rating}`}
                      <br />
                      {`Users Rated: ${hottest_take_low.number_rated}`}
                      <br />
                      {`Difference: ${hottest_take_low.difference}`}
                    </Box>
                    <img
                      src={hottest_take_low.image_url}
                      alt={hottest_take_low.name}
                      width={125}
                      height={125}
                      style={{
                        objectFit: 'cover', borderRadius: '10px', maxHeight: '100%', maxWidth: '100%'
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* stats */}
            <Grid xs={12} sm={6} md={4}>
              <Box style={{ padding: '15px' }}>
                <Grid container style={style.card}>
                  <Grid xs={12} sm={12} md={12} style={{ textAlign: 'center', verticalAlign: 'center' }}>
                    <Box display={{ xs: 'block' }} style={{ textAlign: 'center' }}>
                      <Typography variant="h5">
                        Statistics on total averages
                        <br />
                      </Typography>
                      {`Total Rated: ${stats.games_rated}`}
                      <br />
                      {`Average Rating: ${stats.games_mean}`}
                      <br />
                      {`BGG Average: ${stats.bgg_mean}`}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

          </Grid>
        </Container>
      );
    }
    return (
      <Container>
        <Typography variant="h5" style={{ textAlign: 'left', width: '100%' }}>
          Loading...
        </Typography>
      </Container>
    );
  }
}

GroupStats.propTypes = {
  stats: PropTypes.shape({
    highest_rated: PropTypes.shape({
      name: PropTypes.string,
      image_url: PropTypes.string,
      rating: PropTypes.string,
      number_rated: PropTypes.string
    }),
    lowest_rated: PropTypes.shape({
      name: PropTypes.string,
      image_url: PropTypes.string,
      rating: PropTypes.string,
      number_rated: PropTypes.string
    }),
    hottest_take_high: PropTypes.shape({
      name: PropTypes.string,
      image_url: PropTypes.string,
      rating: PropTypes.number,
      bgg_rating: PropTypes.number,
      number_rated: PropTypes.number,
      difference: PropTypes.number
    }),
    hottest_take_low: PropTypes.shape({
      name: PropTypes.string,
      image_url: PropTypes.string,
      rating: PropTypes.number,
      bgg_rating: PropTypes.number,
      number_rated: PropTypes.number,
      difference: PropTypes.number
    }),
    games_rated: PropTypes.number,
    games_mean: PropTypes.number,
    bgg_mean: PropTypes.number
  }).isRequired
};

export default GroupStats;