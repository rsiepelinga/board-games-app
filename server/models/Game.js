class Game {
  constructor(obj) {
    this.id = obj.id || '';
    this.name = this.cleanString(this.findName(obj.name));
    this.image_url = obj.image || '';
    this.description = this.cleanString(obj.description) || '';
    this.year_published = obj.yearpublished.value || '';
    this.min_duration = obj.minplaytime.value || '';
    this.max_duration = obj.maxplaytime.value || '';
    this.min_players = obj.minplayers.value || '';
    this.max_players = obj.maxplayers.value || '';
    const ratings = obj.statistics.ratings;
    this.weight = ratings.averageweight.value || '';
    this.rating = ratings.average.value || '';
    this.categories = this.filterLinks(obj.link, 'boardgamecategory');
    this.mechanics = this.filterLinks(obj.link, 'boardgamemechanic');
    this.expansions = this.filterLinks(obj.link, 'boardgameexpansion');
    this.publishers = this.filterLinks(obj.link, 'boardgamepublisher');
    this.designers = this.filterLinks(obj.link, 'boardgamedesigner');
    this.artists = this.filterLinks(obj.link, 'boardgameartist');
  }

  // eslint-disable-next-line class-methods-use-this
  findName(names) {
    if (Array.isArray(names)) {
      return names.filter((item) => item.type === 'primary').shift().value;
    }
    return names.value;
  }

  // TODO: Look-up decode XML in Javascript
  // eslint-disable-next-line class-methods-use-this
  cleanString(str) {
    return str.toString().replaceAll('&amp;', '&')
      .replaceAll('&amp;', '&')
      .replaceAll('&#039;', "'")
      .replaceAll('&#10;', '\n')
      .replaceAll('&mdash;', '—')
      .replaceAll('&ndash;', '-')
      .replaceAll('&#195;&#182;', 'ã');
  }

  // eslint-disable-next-line class-methods-use-this
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
}

module.exports = Game;