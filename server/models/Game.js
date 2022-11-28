class Game {
  constructor(obj) {
    // Descriptions
    this.details = {};
    this.details.id = obj.id || '';
    this.details.name = this.cleanString(this.findName(obj.name));
    this.details.year_published = obj.yearpublished.value || '';
    // Duration
    this.details.min_duration = obj.minplaytime.value || '';
    this.details.max_duration = obj.maxplaytime.value || '';
    this.details.duration = obj.minplaytime.value === obj.maxplaytime.value
      ? obj.minplaytime.value
      : `${obj.minplaytime.value}-${obj.maxplaytime.value}`;
    // Players
    this.details.min_players = obj.minplayers.value || '';
    this.details.max_players = obj.maxplayers.value || '';
    this.details.players = obj.minplayers.value === obj.maxplayers.value
      ? obj.minplayers.value
      : `${obj.minplayers.value}-${obj.maxplayers.value}`;
    // Ratings
    const ratings = obj.statistics.ratings;
    this.details.weight = parseFloat(ratings.averageweight.value).toFixed(2) || '';
    this.details.rating = parseFloat(ratings.average.value).toFixed(2) || '';
    // Description
    this.image_url = obj.image || '';
    this.description = this.cleanString(obj.description) || '';
    // Expansions
    this.expansions = this.filterLinks(obj.link, 'boardgameexpansion');
    // Tags: Categories & Mechanics
    this.tags = {};
    this.tags.categories = this.filterLinks(obj.link, 'boardgamecategory');
    this.tags.mechanics = this.filterLinks(obj.link, 'boardgamemechanic');
    // Contributors: Publishers, Designers & Artists
    this.contributors = {};
    this.contributors.publishers = this.filterLinks(obj.link, 'boardgamepublisher');
    this.contributors.designers = this.filterLinks(obj.link, 'boardgamedesigner');
    this.contributors.artists = this.filterLinks(obj.link, 'boardgameartist');
    //User Information
    this.details.userRating = parseInt(obj.stats.rating.value) || '';
    this.details.plays = parseInt(obj.numPlays);
    this.details.ownedStatus = this.getOwnedStatus(obj.status);
  }

  findName(names) {
    if (Array.isArray(names)) {
      return names.filter((item) => item.type === 'primary').shift().value;
    }
    return names.value;
  }

  // TODO: Look-up decode XML in Javascript
  cleanString(str) {
    return (str) ? str.toString().replaceAll('&amp;', '&')
      .replaceAll('&amp;', '&')
      .replaceAll('&#039;', "'")
      .replaceAll('&#10;', '\n')
      .replaceAll('&mdash;', '—')
      .replaceAll('&ndash;', '-')
      .replaceAll('&#195;&#182;', 'ã') : str;
  }

  filterLinks(links, filterVal) {
    // eslint-disable-next-line prefer-const
    let results = [];
    links.filter((link) => (
      link.type === filterVal
    )).forEach((item) => {
      results.push(item.value);
    });
    return results;
  }

  getOwnedStatus(status) {
    if(status.own === '1') return 'own';
    if(status.prevowned === '1') return 'prevowned';
    if(status.fortrade === '1') return 'fortrade';
    if(status.want === '1') return 'want';
    if(status.wanttoplay === '1') return 'wanttoplay';
    if(status.wanttobuy === '1') return 'wanttobuy';
    if(status.wishlist === '1') return 'wishlist';
    if(status.preordered === '1') return 'preordered';
  }
}

module.exports = Game;