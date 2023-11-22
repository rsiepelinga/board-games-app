/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import { httpGet } from '../api';

function getGroupsData() {
  const groupsJSON = localStorage.getItem('groups');
  return groupsJSON ? JSON.parse(groupsJSON) : [];
}

function getGroupData(groupId) {
  const groupsJSON = localStorage.getItem('groups');
  const filteredGroups = JSON.parse(groupsJSON).filter((group) => group.id === groupId);
  return filteredGroups ? filteredGroups[0] : null;
}

function getGroupRatings(groupId) {
  const groupsJSON = localStorage.getItem('groups');
  const filteredGroups = JSON.parse(groupsJSON).filter((group) => group.id === groupId);
  const members = filteredGroups[0].members.join(';');
  return httpGet(`http://localhost:8000/api/collection/ratings/${members}`)
    .then((result) => result)
    .catch((error) => {
      console.error('ERROR getCollectionWithDetailsData', error);
    });
}

export {
  getGroupsData,
  getGroupData,
  getGroupRatings
};