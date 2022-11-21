import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Members from './Members';

function Wrapper(props) {

  if (props.group) {
    console.log(props);
    return (
      <Grid container spacing={{ xs: 1, sm: 2, md: 3}} style={{paddingTop: '10px'}}>
        <Grid xs={12}>
          <Typography variant="h4">{props.group.name}</Typography>
        </Grid>
      
        <Grid xs={12}>
          <Members group={props.group}></Members>
        </Grid>
      </Grid>
    )
  } 
  return (
    <CircularProgress color="secondary"/>
  );
}

export default Wrapper;