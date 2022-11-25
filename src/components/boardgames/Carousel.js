/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const style = {
      container: {
        maxWidth: '100%',
        overflowX: 'scroll'
      },
      carousel: {
        display: 'inline-flex'
      },
      titleContainer: {
        color: '#fff',
        fontWeight: 'bold'
      },
      wrapper: {
        paddingTop: '10px'
      },
      imgageContainer: {
        padding: '10px 10px 10px 0'
      },
      image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '10px'
      }
    };

    const {
      container, carousel, titleContainer, wrapper, imageContainer, image
    } = style;
    const { collection, title } = this.props;

    return (
      <Container style={wrapper}>
        <Box style={titleContainer}>
          {title}
        </Box>
        <Box style={container}>
          <Box style={carousel}>
            {collection.map((game) => (
              <Box style={imageContainer} component={Link} to={`/boardgame/${game.id}`}>
                <img
                  style={image}
                  src={game.image_url}
                  alt={game.name}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    );
  }
}

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  collection: PropTypes.shape({
    game: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      year_published: PropTypes.string,
      min_duration: PropTypes.string,
      max_duration: PropTypes.string,
      min_players: PropTypes.string,
      max_players: PropTypes.string,
      weight: PropTypes.string,
      rating: PropTypes.string,
      image_url: PropTypes.string
    })
  }).isRequired
};

export default Carousel;