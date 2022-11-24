/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Contributors from './Contributors';
import Description from './Description';
import Details from './Details';
import Expansions from './Expansions';
import Image from './Image';
import Tags from './Tags';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { game } = this.props;
    const {
      details, description, expansions, image_url, contributors, tags
    } = game;

    if (game) {
      return (
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} style={{ paddingTop: '10px' }}>
          <Grid xs={4} s={3} md={2}>
            <Item>
              <Image image_url={image_url} />
            </Item>
          </Grid>

          <Grid xs={8} s={9} md={10} style={{ paddingLeft: '20px' }}>
            <Item>
              <Details details={details} />
            </Item>
          </Grid>

          <Grid>
            <Description description={description} />
            {expansions.length > 0 && <Expansions expansions={expansions} />}
            <Contributors contributors={contributors} />
          </Grid>

          <Grid style={{ paddingTop: '20px' }}>
            <Tags tags={tags} />
          </Grid>
        </Grid>
      );
    }
    return (
      <CircularProgress color="secondary" />
    );
  }
}

Wrapper.propTypes = {
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

export default Wrapper;