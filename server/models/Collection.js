const Game = require('./Game');

class Collection {
  constructor(data) {
    this.collection = [];
    let mechanics = new Map();
    let categories = new Map();
    let designers = new Map();
    let artists = new Map();

    data.forEach((element) => {
      let game = new Game(element);
      this.collection.push(game);

      game.tags.mechanics.forEach((mechanic) => {
        if(mechanics.has(mechanic)) { 
          let m = mechanics.get(mechanic);
          m.addRating(element.rating);
          mechanics.set(m);
        } else {
          mechanics.set(mechanic, new CollectionSubData(1, game.userRating));
        }
      });

    });
    //console.log(mechanics);
    this.numberOfGames = data.length;
  }
}

//top rated games (this is just an order on front end)
//top rated mechanics (sum)
//top rated categories
//top rated designers
//top rated artists

class CollectionSubData {
  constructor(number, rating) {
    this.number = number;
    this.totalRating = rating;
  }

  addRating(rating) {
    this.totalRating += rating;
    this.number += 1;
  }
}

module.exports = Collection;