/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { Library } from '../../components';
import { getCollectionWithDetailsData } from '../../actions';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class GameList extends React.Component {
  constructor() {
    super();

    this.state = {
      results: undefined
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    const { id } = this.props.params;

    this.loadData(id).then((result) => {
      this.setState({
        results: result
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  loadData(username) {
    if (username) {
      return getCollectionWithDetailsData(username);
    }
    return getCollectionWithDetailsData('rsiep');
  }

  render() {
    const { results } = this.state;
    if (results) {
      const { collection } = results;
      return (
        <Library title="Collection" collection={collection} />
      );
    }
    return (
      <Box style={{ textAlign: 'center', paddingTop: '50px' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
}

export default withParams(GameList);