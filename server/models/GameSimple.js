class GameSimple {
  constructor(obj) {
    // Descriptions
    this.details = {};
    this.details.id = obj.objectid || '';
    this.details.name = this.cleanString(this.findName(obj.name));
    this.details.year_published = obj.yearpublished || '';
    // Duration
    this.details.min_duration = obj.stats.minplaytime || '';
    this.details.max_duration = obj.stats.maxplaytime || '';
    this.details.duration = obj.stats.minplaytime === obj.stats.maxplaytime
      ? obj.stats.minplaytime
      : `${obj.stats.minplaytime}-${obj.stats.maxplaytime}`;
    // Players
    this.details.min_players = obj.stats.minplayers || '';
    this.details.max_players = obj.stats.maxplayers || '';
    this.details.players = obj.stats.minplayers === obj.stats.maxplayers
      ? obj.stats.minplayers
      : `${obj.stats.minplayers}-${obj.stats.maxplayers}`;
    // Ratings
    const ratings = obj.stats.rating;
    this.details.rating = parseFloat(ratings.average.value).toFixed(2) || '';
    // Description
    this.image_url = obj.image || '';
  }

  findName(names) {
    if (Array.isArray(names)) {
      return names.filter((item) => item.sortindex === '1').shift().text;
    }
    return names.text;
  }

  // TODO: Look-up decode XML in Javascript
  cleanString(str) {
    return str.toString().replaceAll('&amp;', '&')
      .replaceAll('&amp;', '&')
      .replaceAll('&#039;', "'")
      .replaceAll('&#10;', '\n')
      .replaceAll('&mdash;', '—')
      .replaceAll('&ndash;', '-')
      .replaceAll('&#195;&#182;', 'ã');
  }
}

module.exports = GameSimple;