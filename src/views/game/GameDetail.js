import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { getGameData } from '../../actions';
import { GameWrapper } from '../../components';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class GameDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: {}
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { id } = this.props.params;
    this.getMyGame(id).then((result) => {
      this.setState({
        game: result
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getMyGame(id) {
    return getGameData(id);
  }

  render() {
    return (
      <Container>
        <GameWrapper game={this.state.game} />
      </Container>
    );
  }
}

export default withParams(GameDetail);