const Game = require('./Game');

class Collection {
  constructor(data) {
    this.collection = [];
    data.item.forEach((element) => {
      this.collection.push(new Game(element));
    });
  }
}

module.exports = Collection;