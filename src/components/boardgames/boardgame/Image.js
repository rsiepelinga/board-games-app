import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { image_url } = this.props;

    return (
      <img src={image_url} alt="Game Thumbnail" width="100%" />
    );
  }
}

Image.propTypes = {
  image_url: PropTypes.string.isRequired
};

export default Image;