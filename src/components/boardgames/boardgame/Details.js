import React from 'react';
import PropTypes from 'prop-types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { details } = this.props;
    const {
      name, duration, players, rating
    } = details;

    return (
      <div>
        <h2>{name}</h2>
        <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <StarIcon color="secondary" style={{ marginRight: '10px' }} />
          {`${rating} / 10`}

        </p>
        <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <PersonIcon color="secondary" style={{ marginRight: '10px' }} />
          {`${players} players`}

        </p>
        <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <AccessTimeIcon color="secondary" style={{ marginRight: '10px' }} />
          {`${duration} minutes`}
        </p>
      </div>
    );
  }
}

Details.propTypes = {
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
  }).isRequired
};

export default Details;