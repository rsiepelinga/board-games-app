/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { GroupCard } from '../../components';
import { getGroupsData } from '../../actions';
import '../../themes/input.css';

class GameList extends React.Component {
  constructor() {
    super();
    this.handleAddGroup.bind(this);

    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  handleAddGroup() {
    window.location.href = '/group/new';
  }

  loadData() {
    const grps = getGroupsData('rsiep');
    this.setState({
      groups: grps
    });
  }

  render() {
    return (
      <div className="full-screen">
        <h1>My Groups.</h1>

        {this.state.groups.map((group) => (
          <div key={group.id}>
            <GroupCard group={group} />
          </div>
        ))}

        <div className="anchor">
          <button type="button" className="input--orange" onClick={this.handleAddGroup}>
            Add Group
          </button>
        </div>
      </div>
    );
  }
}

export default GameList;