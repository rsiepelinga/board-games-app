const Game = require('./Game');
const GameSimple = require('./GameSimple');

class Collection {
  constructor(data, details) {
    this.collection = [];
    data.item.forEach((element) => {
      if (details) {
        this.collection.push(new Game(element));
      } else {
        this.collection.push(new GameSimple(element));
      }
    });
  }
}

module.exports = Collection;