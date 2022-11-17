import React, { useEffect } from 'react';
import { Library } from '../../components';
import { getCollectionData } from '../../actions';

const GameList = (props) => {
  var collection = [
    {
      "id": "31260",
      "name": "Agricola",
      "min_duration": 30,
      "max_duration": 150,
      "min_players": 1,
      "max_players": 5,
      "weight": 3.64,
      "rating": 7.9,
      "image_url": "https://cf.geekdo-images.com/dDDo2Hexl80ucK1IlqTk-g__itemrep/img/DzC9cA0TNmWUO7WLdl4-uFHfO_k=/fit-in/246x300/filters:strip_icc()/pic831744.jpg",
      "mechanics": [
        "Automatic Resource Growth",
        "Closed Drafting",
        "Enclosure",
        "Hand Management"
      ]
    },{
      "id": "224517",
      "name": "Brass: Birmingam",
      "min_duration": 60,
      "max_duration": 120,
      "min_players": 2,
      "max_players": 4,
      "weight": 3.91,
      "rating": 8.7,
      "image_url": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__itemrep/img/giNUMut4HAl-zWyQkGG0YchmuLI=/fit-in/246x300/filters:strip_icc()/pic3490053.jpg",
      "mechanics": [
        "Hand Management",
        "Income",
        "Loans",
        "Market"
      ]
    },{
      "id": "13",
      "name": "Catan",
      "min_duration": 60,
      "max_duration": 120,
      "min_players": 3,
      "max_players": 4,
      "weight": 2.31,
      "rating": 7.1,
      "image_url": "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg",
      "mechanics": [
        "Dice Rolling",
        "Hexagon Grid",
        "Income",
        "Modular Board"
      ]
    },{
      "id": "36218",
      "name": "Dominion",
      "min_duration": 30,
      "max_duration": 30,
      "min_players": 2,
      "max_players": 4,
      "weight": 2.35,
      "rating": 7.6,
      "image_url": "https://cf.geekdo-images.com/j6iQpZ4XkemZP07HNCODBA__itemrep/img/_QiaiFj-LGZoqdatE-wVqNaYWx8=/fit-in/246x300/filters:strip_icc()/pic394356.jpg",
      "mechanics": [
        "Deck, Bag, and Pool Building",
        "Delayed Purchase",
        "Hand Management",
        "Take That"
      ]
    },{
      "id": "199792",
      "name": "Everdell",
      "min_duration": 40,
      "max_duration": 80,
      "min_players": 1,
      "max_players": 4,
      "weight": 2.81,
      "rating": 8.1,
      "image_url": "https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__itemrep/img/nyVhVuXdmw-1sigbocTKG81UInM=/fit-in/246x300/filters:strip_icc()/pic3918905.png",
      "mechanics": [
        "Contracts",
        "End Game Bonuses",
        "Hand Management",
        "Income"
      ]
    },{
      "id": "353152",
      "name": "Framework",
      "min_duration": 30,
      "max_duration": 30,
      "min_players": 1,
      "max_players": 4,
      "weight": 2,
      "rating": 7.4,
      "image_url": "https://cf.geekdo-images.com/ZpCVs_p1wlbiSFOg1nNVoA__itemrep/img/quXHvV93Mp_Ap4YftqHnGkRTvOs=/fit-in/246x300/filters:strip_icc()/pic6573332.jpg",
      "mechanics": [
        "Solo / Solitaire Game",
        "Tile Placement"
      ]
    }
  ];
  
  useEffect(() => {
    collection = getCollectionData('rsiep');
  });

  return (
    <div>
      <Library title="My Collection" collection={collection}/>
    </div>
  );
}

export default GameList;