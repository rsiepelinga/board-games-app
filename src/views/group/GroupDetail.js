import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { getGroupData } from '../../actions';
import { GroupWrapper } from '../../components';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      group: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.loadData(id);
  }

  loadData(id) {
    const result = getGroupData(id);
    console.log(result);
    this.setState({
      group: result
    });
  }

  render() {
    return (
      <Container>
        <GroupWrapper group={this.state.group} />
      </Container>
    );
  }
}

export default withParams(GroupDetail);