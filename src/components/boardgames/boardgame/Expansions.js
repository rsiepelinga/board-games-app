import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, AccordionSummary, AccordionDetails, ListItem
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

class Expansions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { expansions } = this.props;
    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore color="white" />}>
          Expansions
        </AccordionSummary>
        <AccordionDetails>
          {expansions.map((exp) => (
            <ListItem key={exp} disablePadding>
              &#8226;
              {' '}
              {exp}
            </ListItem>
          ))}
        </AccordionDetails>
      </Accordion>
    );
  }
}

Expansions.propTypes = {
  expansions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Expansions;