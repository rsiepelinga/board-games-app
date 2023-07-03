import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { description } = this.props;

    return (
      <div>
        <h6>Description</h6>
        <p>{description}</p>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired
};

export default Description;