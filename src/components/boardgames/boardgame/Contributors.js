import React from 'react';
import PropTypes from 'prop-types';

class Contributors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { contributors } = this.props;
    const { publishers, designers, artists } = contributors;

    return (
      <div>
        <h6>Publishers, Designers, and Artists</h6>
        <p>
          <b>Publishers:</b>
          {' '}
          {publishers.join(', ')}
        </p>
        <p>
          <b>Designers:</b>
          {' '}
          {designers.join(', ')}
        </p>
        <p>
          <b>Artists:</b>
          {' '}
          {artists.join(', ')}
        </p>
      </div>
    );
  }
}

Contributors.propTypes = {
  contributors: PropTypes.shape({
    publishers: PropTypes.arrayOf(PropTypes.string),
    designers: PropTypes.arrayOf(PropTypes.string),
    artists: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Contributors;