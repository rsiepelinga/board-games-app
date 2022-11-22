class Collection {
  constructor(obj, owner) {
    this.id = obj.objectid || '';
    this.name = this.cleanString(obj.name.text) || '';
    this.min_duration = obj.stats.minplaytime || '';
    this.max_duration = obj.stats.maxplaytime || '';
    this.min_players = obj.stats.minplayers || '';
    this.max_players = obj.stats.maxplayers || '';
    this.weight = obj.weight || '';
    this.rating = obj.stats.rating.average.value || '';
    this.image_url = obj.image || '';
    this.mechanics = obj.mechanics || [];
    this.user_rating = obj.stats.rating.value || '';
    this.owner = owner || '';
    this.is_expansion = obj.subtype;
    this.year_published = obj.yearpublished;
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
}

module.exports = Collection;