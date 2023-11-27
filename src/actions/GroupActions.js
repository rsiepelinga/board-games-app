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

function generateStats(collection) {
  console.warn(collection);
  const stats = {
    highest_rated: {
      name: '',
      image_url: '',
      rating: -1,
      number_rated: 0
    },
    lowest_rated: {
      name: '',
      image_url: '',
      rating: 11,
      number_rated: 0
    },
    hottest_take_high: {
      name: '',
      image_url: '',
      rating: 0,
      bgg_rating: 0,
      number_rated: 0,
      difference: 0
    },
    hottest_take_low: {
      name: '',
      image_url: '',
      rating: 0,
      bgg_rating: 0,
      number_rated: 0,
      difference: 11
    },
    games_rated: 0,
    games_mean: 0,
    bgg_mean: 0,
    by_user: []
  };

  collection.forEach((game) => {
    const totalRating = (stats.games_mean
      * stats.games_rated);
    const bggTotal = (stats.bgg_mean * stats.games_rated);
    stats.games_rated += 1;
    stats.games_mean = (+totalRating + +game.statistics.mean_rating)
      / stats.games_rated;
    stats.bgg_mean = (+bggTotal + +game.details.rating)
      / stats.games_rated;

    if (+game.statistics.mean_rating > +stats.highest_rated.rating) {
      stats.highest_rated = {
        name: game.details.name,
        image_url: game.image_url,
        rating: +game.statistics.mean_rating,
        number_rated: +game.statistics.number_rated
      };
    }

    if (+game.statistics.mean_rating < +stats.lowest_rated.rating) {
      stats.lowest_rated = {
        name: game.details.name,
        image_url: game.image_url,
        rating: +game.statistics.mean_rating,
        number_rated: +game.statistics.number_rated
      };
    }

    if (game.statistics.mean_rating - game.details.rating > stats.hottest_take_high.difference) {
      stats.hottest_take_high = {
        name: game.details.name,
        image_url: game.image_url,
        rating: +game.statistics.mean_rating,
        bgg_rating: +game.details.rating,
        number_rated: +game.statistics.number_rated,
        difference: game.statistics.mean_rating - game.details.rating
      };
    } else if (game.statistics.mean_rating - game.details.rating
        < stats.hottest_take_low.difference) {
      stats.hottest_take_low = {
        name: game.details.name,
        image_url: game.image_url,
        rating: +game.statistics.mean_rating,
        bgg_rating: +game.details.rating,
        number_rated: +game.statistics.number_rated,
        difference: game.statistics.mean_rating - game.details.rating
      };
    }

    // groups' total games and total rating - check
    // per individual - differences/similiarities between people
    // per individual - most recommeneded board game for each person based off game
    // per individual - hottest take ranking against group
    // groups' hottest take against BGG average
    // BGG expected average - check

    // game.ratings.forEach((rating) => {
    //   const index = stats.by_user.findIndex((r) => r.user === rating.user);
    // });
  });

  stats.games_mean = stats.games_mean.toFixed(2);
  stats.bgg_mean = stats.bgg_mean.toFixed(2);
  stats.hottest_take_high.difference = stats.hottest_take_high.difference.toFixed(2);
  stats.hottest_take_low.difference = stats.hottest_take_low.difference.toFixed(2);

  console.warn(stats);
  return stats;
}

export {
  getGroupsData,
  getGroupData,
  getGroupRatings,
  generateStats
};