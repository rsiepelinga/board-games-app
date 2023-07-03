// import { httpGet } from '../api';

function getGroupsData() {
  const groupsJSON = localStorage.getItem('groups');
  return groupsJSON ? JSON.parse(groupsJSON) : [];
}

function getGroupData(groupId) {
  const groupsJSON = localStorage.getItem('groups');
  const filteredGroups = JSON.parse(groupsJSON).filter((group) => group.id === groupId);
  return filteredGroups ? filteredGroups[0] : null;
}

export {
  getGroupsData,
  getGroupData
};