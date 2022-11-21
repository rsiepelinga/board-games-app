// import { httpGet } from '../api';
const groups = [
  {
    id: "group_1",
    name: "Candorians",
    members: [
      {
        id: "user_1",
        name: "Rachel Siepelinga",
        initials: "RS",
        bgg_username: "rsiep"
      },{
        id: "user_2",
        name: "Garrett Reichert",
        initials: "GR",
        bgg_username: "gitsol"
      },{
        id: "user_6",
        name: "Brandon Baumer",
        initials: "BB",
        bgg_username: ""
      },{
        id: "user_8",
        name: "Caroline Lloyd",
        initials: "CL",
        bgg_username: ""
      },{
        id: "user_9",
        name: "Kurt Mace",
        initials: "KM",
        bgg_username: ""
      }
    ]
  },{
    id: "group_2",
    name: "Messiah",
    members: [
      {
        id: "user_1",
        name: "Rachel Siepelinga",
        initials: "RS",
        bgg_username: "rsiep"
      },{
        id: "user_2",
        name: "Garrett Reichert",
        initials: "GR",
        bgg_username: "gitsol"
      },{
        id: "user_3",
        name: "Daria Zwart",
        initials: "DZ",
        bgg_username: "dzweshy"
      },{
        id: "user_4",
        name: "Paul Zwart",
        initials: "PZ",
        bgg_username: ""
      },{
        id: "user_5",
        name: "Bekah Kuzmich",
        initials: "BK",
        bgg_username: ""
      },{
        id: "user_6",
        name: "Brandon Baumer",
        initials: "BB",
        bgg_username: ""
      },{
        id: "user_7",
        name: "Daniel Sidell",
        initials: "DS",
        bgg_username: ""
      }
    ]
  }
];

function getGroupsData(username) {
  return groups;
}

function getGroupData(groupId) {
  let filteredGroups = groups.filter(function (group) {
    return group.id === groupId
  });
  return filteredGroups ? filteredGroups[0] : null;
}

export {
  getGroupsData,
  getGroupData
};