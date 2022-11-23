/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, ListItem
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

function Expansions(props) {
  const expansions = [];

  if (props && props.game && props.game.expansions) {
    if (props.game.expansions.length) {
      props.game.expansions.forEach((item) => {
        expansions.push(item);
      });
    }
  }

  if (expansions.length) {
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

export default Expansions;