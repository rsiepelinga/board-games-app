/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography, Skeleton
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

function Description(props) {
  let isLoading = true;
  let description;

  if (props && props.game && props.game.description) {
    description = props.game.description;
    isLoading = false;
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore color="white" />}>
        Description
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="p">{isLoading ? <Skeleton /> : description.split('\n').map((item) => <p key={item}>{item}</p>)}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Description;