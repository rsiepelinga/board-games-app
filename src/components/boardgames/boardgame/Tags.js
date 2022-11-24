import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { tags } = this.props;
    const { categories, mechanics } = tags;

    return (
      <Box style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        {categories.map((category) => (
          <Chip icon={<CategoryIcon />} label={category} color="info" />
        ))}
        {mechanics.map((mechanic) => (
          <Chip icon={<SettingsIcon />} label={mechanic} color="info" />
        ))}
      </Box>
    );
  }
}

Tags.propTypes = {
  tags: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string),
    mechanics: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Tags;