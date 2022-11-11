import React from 'react';
import { useParams } from 'react-router-dom';

const GameDetail = (props) => {
  const { id } = useParams();

  var style = {
    h1: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: '24px',
      paddingTop: '50px',
      fontWeight: 'bold'
    },
    p: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: '18px'
    }
  }

  return (
    <div>
      <p style={style.h1}>
        Game {id} Page
      </p>
      <p style={style.p}>
        This page is coming soon!
      </p>
    </div>
  );
}

export default GameDetail;