import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Skeleton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import cleanString from '../utils';

function Description(props) {
  var isLoading = true;
  var description;

  if (props && props.game && props.game.description) {
    description = cleanString(props.game.description);
    isLoading = false;
  }

  return (
    <Accordion>
      <AccordionSummary  expandIcon={<ExpandMore color="white" />}>
        Description
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="p">{isLoading ? <Skeleton /> : description.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default Description;