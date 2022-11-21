import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import cleanString from '../../utils';

function Contributors(props) {
  var contributors = [];
  var publishers = [];
  var designers = [];
  var artists = [];

  if (props && props.game) {
    if (props.game.publishers && props.game.publishers.length) {
      props.game.publishers.forEach(item => {
        publishers.push(cleanString(item));
      })
      contributors.push({label: 'Publishers', values: publishers.join(', ')});
    }
    if (props.game.designers && props.game.designers.length) {
      props.game.designers.forEach(item => {
        designers.push(cleanString(item));
      })
      contributors.push({label: 'Designers', values: designers.join(', ')});
    }
    if (props.game.artists && props.game.artists.length) {
      props.game.artists.forEach(item => {
        artists.push(cleanString(item));
      })
      contributors.push({label: 'Artists', values: artists.join(', ')});
    }
  } 

  if (contributors.length) {
    return (
      <Accordion>
        <AccordionSummary  expandIcon={<ExpandMore color="white" />}>
          Publishers, Designers, and Artists
        </AccordionSummary>
        <AccordionDetails>
          {contributors.map((con) => (
            <Box key={con.label}>
              <Typography variant="p"><b>{con.label}:</b> {con.values}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    )
  } 
}

export default Contributors;