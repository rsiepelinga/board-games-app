import React from 'react';
import { useParams } from 'react-router-dom';
import { Library } from '../../components';
import { getCollectionData } from '../../actions';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class GameList extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: []
    };
  }

  componentDidMount() {
    const { id } = this.props.params;

    this.loadData(id).then((result) => {
      this.setState({
        collection: result
      });
    });
  }

  loadData(username) {
    if (username) {
      return getCollectionData(username);
    }
    return getCollectionData('rsiep');
  }

  render() {
    return (
      <Library title="Collection" collection={this.state.collection} />
    );
  }
}

export default withParams(GameList);