/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Accordion, AccordionSummary, AccordionDetails, Box, Typography
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

class Contributors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { contributors } = this.props;
    const { publishers, designers, artists } = contributors;

    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore color="white" />}>
          Publishers, Designers, and Artists
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="p">
              <b>Publishers:</b>
              {' '}
              {publishers.join(', ')}
            </Typography>
          </Box>
          <Box>
            <Typography variant="p">
              <b>Designers:</b>
              {' '}
              {designers.join(', ')}
            </Typography>
          </Box>
          <Box>
            <Typography variant="p">
              <b>Artists:</b>
              {' '}
              {artists.join(', ')}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
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