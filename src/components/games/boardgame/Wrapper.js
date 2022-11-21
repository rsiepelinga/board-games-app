import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Contributors from './Contributors';
import Description from './Description';
import Details from './Details';
import Expansions from './Expansions';
import Image from './Image';
import Tags from './Tags';

function Wrapper(props) {

  if (props.game) {
    return (
      <Grid container spacing={{ xs: 1, sm: 2, md: 3}} style={{paddingTop: '10px'}}>
        <Grid xs={4} s={3} md={2}>
          <Item>
            <Image game={props.game}></Image>
          </Item>
        </Grid>
      
        {/* Right Column */}
        <Grid xs={8} s={9} md={10} style={{paddingLeft: '20px'}}>
          <Item>
            <Details game={props.game}></Details>
          </Item>
        </Grid>
  
        <Grid>
          <Description game={props.game}></Description>
          <Expansions game={props.game}></Expansions>
          <Contributors game={props.game}></Contributors>
        </Grid>

        <Grid style={{paddingTop: '20px'}}>
          <Tags game={props.game}></Tags>
        </Grid>
      </Grid>
    )
  } 
  return (
    <CircularProgress color="secondary"/>
  );
}

export default Wrapper;