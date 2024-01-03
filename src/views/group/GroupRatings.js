/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getGroupRatings, generateStats } from '../../actions';
import RatingCard from '../../components/groups/RatingCard';
import GroupStats from '../../components/groups/GroupStats';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class GroupRatings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: {
        games: []
      },
      stats: {}
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    const { id } = this.props.params;
    this.loadData(id);
  }

  loadData(id) {
    getGroupRatings(id).then((result) => {
      console.log(result);
      this.setState({
        collections: result
      });
      this.generateStatisticData(result.games);
    });
  }

  generateStatisticData(collection) {
    const res = generateStats(collection);
    console.log(res);
    this.setState({
      stats: res
    });
  }

  render() {
    return (
      <Container>
        <Typography variant="h5" style={{ textAlign: 'center', width: '100%' }}>Group Ratings</Typography>

        <GroupStats stats={this.state.stats} />

        <hr />
        <Grid container>
          <Grid container xs={12} sm={12} md={12}>
            {this.state.collections.games.map((game) => (
              <Grid xs={12} sm={6} md={4} key={game.bid}>
                <RatingCard game={game} key={game.bid} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withParams(GroupRatings);