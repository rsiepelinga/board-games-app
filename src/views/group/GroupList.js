/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { GroupCard } from '../../components';
import { getGroupsData } from '../../actions';

class GameList extends React.Component {
  constructor() {
    super();

    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const grps = getGroupsData('rsiep');
    this.setState({
      groups: grps
    });
  }

  render() {
    return (
      <Grid container style={{ display: 'inline-flex' }}>
        <Grid xs={12}>
          <Typography variant="h4">My Groups</Typography>
        </Grid>

        {this.state.groups.map((group) => (
          <Grid xs={6} sm={4} md={3} style={{ padding: '10px' }} key={group.id}>
            <GroupCard group={group} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default GameList;