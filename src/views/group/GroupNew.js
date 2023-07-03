import React from 'react';
import '../../themes/input.css';

class GroupNew extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddGroup = this.handleAddGroup.bind(this);

    this.state = { errorMessage: null };
  }

  handleAddGroup() {
    const groupName = document.querySelector('input').value;
    const groupMembers = document.querySelector('textarea').value;

    if (groupName && groupMembers) {
      const group = {};
      group.id = this.buildGroupId(groupName);
      group.name = groupName;
      group.members = groupMembers.split('\n');

      const groupsJSON = localStorage.getItem('groups');
      const groups = groupsJSON ? JSON.parse(groupsJSON) : [];
      groups.push(group);
      localStorage.setItem('groups', JSON.stringify(groups));
      window.location = `/group/${group.id}`;
    }
  }

  buildGroupId(groupName) {
    return `${groupName.toLowerCase().replaceAll(' ', '-')}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
  }

  render() {
    const { errorMessage } = this.state;

    return (
      <div className="full-screen">
        <h1>New Group.</h1>

        <form className="display-stack">
          <div className="input__wrapper">
            <input className="input__field" type="text" name="groupName" id="groupName" placeholder="Group Name" />
            <label htmlFor="groupName" className="input__label">Group Name</label>
          </div>
          <div className="input__wrapper">
            <textarea className="input__field" type="text" name="groupMembers" id="groupMembers" placeholder="Group Members" />
            <label htmlFor="groupMembers" className="input__label">BGG Group Members</label>
          </div>
        </form>

        <div className="anchor">
          <div className="error-message">{errorMessage}</div>
          <button type="button" className="input--orange" onClick={this.handleAddGroup}>Add Group</button>
        </div>
      </div>
    );
  }
}

export default GroupNew;