import React from 'react';
import { Library } from '../../components';
import { getCollectionData } from '../../actions';

class GameList extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: []
    }
  }

  componentDidMount() {
    this.getMyCollection().then(result => {
      this.setState({
        collection: result
      });
    });
  }

  getMyCollection() {
    return getCollectionData('rsiep');
  }

  render() {
    return (
      <Library title="My Collection" collection={this.state.collection}/>
    );
  }
}

export default GameList;