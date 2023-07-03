import React from 'react';
import PropTypes from 'prop-types';

class Expansions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { expansions } = this.props;
    return (
      <div>
        <h6>Expansions</h6>
        <p>
          {expansions.map((exp) => (
            <li key={exp}>{exp}</li>
          ))}
        </p>
      </div>
    );
  }
}

Expansions.propTypes = {
  expansions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Expansions;