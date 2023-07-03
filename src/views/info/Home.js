/* eslint-disable max-len */
import React from 'react';
// import '../../themes/styles.css';
import '../../themes/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenTile.bind(this);
  }

  handleOpenTile(event) {
    window.location.href = event.currentTarget.dataset.url;
  }

  render() {
    const name = localStorage.getItem('firstName') || localStorage.getItem('bggUsername');
    const tiles = [
      { label: 'Collection', description: 'view your games', url: '/collection' },
      { label: 'Groups', description: 'play with friends', url: '/groups' },
      { label: 'Selector', description: 'choose a game', url: '/selector' }
    ];

    return (
      <div className="full-screen">
        <h1>
          Hi
          {' '}
          {name}
          .
        </h1>
        <p>
          Welcome to Table Talk, the ultimate app for board game enthusiasts. Easily manage your game collection, access ratings and reviews from Board Game Geek, and receive personalized game suggestions for unforgettable gaming sessions with friends.
        </p>

        <div className="tile__container">

          {tiles.map((tile) => (
            <button type="button" className="tile" data-url={tile.url} key={tile.url} onClick={this.handleOpenTile}>
              <div className="tile__meeple meeple" data-url={tile.url}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405 130" fill="none">
                  <path
                    id="primary"
                    d="M135.671 44.31c-1.176-56.535-65.799-53.606-65.988 0-13.05 7.804-42.644 20.006-56.318 33.044-13.673 13.038-13.966 23.152 0 29.253 13.966 6.101 19.359 6.397 31.592 8.337l-24.784 36.958c-9.75 14.381-16.797 21.749-17.155 44.012 1.804 6.553 4.024 7.196 8.489 7.073h58.176c5.278-.869 7.434-2.305 9.619-6.825 9.525-21.074 14.597-31.203 23.602-40.538 7.543 7.905 11.806 15.254 23.682 40.538 3.273 5.77 5.322 6.586 9.085 6.825h60.631c3.425-1.383 5.494-1.935 6.418-7.073-.052-15.196-3.794-23.075-16.541-44.012-10.713-14.146-15.764-22.292-24.679-36.958 6-.944 25.006-5.315 31.269-8.337 6.263-3.023 19.496-11.79 0-29.253-10.84-10.17-29.695-18.529-57.098-33.043Z"
                  />
                </svg>
              </div>

              <div className="tile__table" data-url={tile.url}>
                <div className="tile__text" data-url={tile.url}>{tile.label}</div>
                <div className="tile__text--tiny" data-url={tile.url}>{tile.description}</div>
              </div>
            </button>
          ))}

        </div>
      </div>
    );
  }
}

export default Home;