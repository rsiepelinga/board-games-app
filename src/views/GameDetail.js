import React from 'react';
import { useParams } from 'react-router-dom';

const GameDetail = (props) => {
  const { id } = useParams();

  return (
    <div>Game - {id}</div>
  );
}

export default GameDetail;