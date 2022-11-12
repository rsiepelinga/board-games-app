import React from 'react';
import SimpleCard from './SimpleCard.js';


function Carousel(props) {
  const style = {
    container: {
      maxWidth: '100%',
      overflowX: 'scroll'
    },
    carousel: {
      display: 'inline-flex'
    },
    title: {
      color: '#fff',
      fontWeight: 'bold'
    },
    wrapper: {
      paddingTop: '10px'
    }
  }

  return (
    <div style={style.wrapper}>
      <div style={style.title}>
        {props.title}
      </div>
      <div style={style.container}>
        <div style={style.carousel}>
          {props.collection.map((game) => (
            <SimpleCard key={game.id} game={game}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;