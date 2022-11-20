class Game {
    constructor(obj, owner) {
      obj = obj != null ? obj : {}
      this.id = obj.id != null ? obj.id : ''
      this.name = this.cleanString(this.findName(obj.name))
      this.image_url = obj.image != null ? obj.image : ''
      this.description = obj.description != null ? this.cleanString(obj.description) : ''
      this.year_published = obj.yearpublished != null ? obj.yearpublished.value : ''
      this.min_duration = obj.minplaytime != null ? obj.minplaytime.value : ''
      this.max_duration = obj.maxplaytime != null ? obj.maxplaytime.value : ''
      this.min_players = obj.minplayers != null ? obj.minplayers.value : ''
      this.max_players = obj.maxplayers != null ? obj.maxplayers.value : ''
      let ratings = obj.statistics.ratings
      this.weight = ratings.averageweight != null ? ratings.averageweight.value : ''
      this.rating = ratings.average != null ? ratings.average.value : ''
      this.categories = this.filterLinks(obj.link, 'boardgamecategory')
      this.mechanics = this.filterLinks(obj.link, 'boardgamemechanic')
      this.expansions = this.filterLinks(obj.link, 'boardgameexpansion')
      this.publishers = this.filterLinks(obj.link, 'boardgamepublisher')
      this.designers = this.filterLinks(obj.link, 'boardgamedesigner')
      this.artists = this.filterLinks(obj.link, 'boardgameartist')
    }

    findName(names) {
      let primary = names.filter(function (item) {
        return item.type === 'primary'
      }); 
      return primary != null ? primary[0].value : null;
    }

    cleanString(str) {
      str.replaceAll('&amp;', "&")
      .replaceAll('&amp;', "&")
      .replaceAll('&#039;', "'")
      .replaceAll('&#10;', "\n")
      .replaceAll('&mdash;', "—")
      .replaceAll('&#195;&#182;', "ã");
      return str;
    }

    filterLinks (links, filterVal) {
      let results = [];
      let filteredLinks = links.filter(function (item) {
        return item.type === filterVal
      });
      filteredLinks.forEach(item => {
        results.push(item.value);
      })
      return results;
    }
  }
  
module.exports = Game;