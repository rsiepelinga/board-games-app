/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { getGroupRatings } from '../../actions';
import RatingCard from '../../components/groups/RatingCard';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class GroupRatings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    const { id } = this.props.params;
    this.loadData(id);
  }

  loadData(id) {
    getGroupRatings(id).then((result) => {
      const orderedData = [];
      console.log(result);
      result.forEach((collection) => {
        collection.collection.forEach((game) => {
          const index = orderedData.findIndex((r) => r.bid === game.details.id);
          if (index === -1) {
            orderedData.push({
              bid: game.details.id,
              details: game.details,
              ratings: [{ user: collection.user, rating: game.user_rating }]
            });
          } else {
            orderedData[index].ratings.push({ user: collection.user, rating: game.user_rating });
          }
        });
      });
      console.log(orderedData);
      this.setState({
        collections: orderedData
      });
    });
  }

  render() {
    return (
      <Container>
        <Typography variant="h5" style={{ textAlign: 'center', width: '100%' }}>Group Ratings</Typography>
        {this.state.collections.map((game) => (
          <div key={game.bid}>
            <RatingCard game={game} key={game.bid} />
          </div>
        ))}
      </Container>
    );
  }
}

export default withParams(GroupRatings);