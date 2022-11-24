/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { CircularProgress, Container } from '@mui/material';
import { getGameData } from '../../actions';
import { GameWrapper } from '../../components';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class GameDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      game: {}
    };
  }

  componentDidMount() {
    const { params } = this.props;
    this.getMyGame(params.id).then((result) => {
      this.setState({
        loaded: true,
        game: result
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getMyGame(id) {
    return getGameData(id);
  }

  render() {
    const { loaded } = this.state;

    if (loaded) {
      const { game } = this.state;
      return (
        <Container>
          <GameWrapper game={game} />
        </Container>
      );
    }
    return (<CircularProgress color="secondary" />);
  }
}

GameDetail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  }).isRequired
};

export default withParams(GameDetail);