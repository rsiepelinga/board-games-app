import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { description } = this.props;

    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore color="white" />}>
          Description
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="p">{description}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired
};

export default Description;