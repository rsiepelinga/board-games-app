import React from 'react';
import meeple from '../../assets/meeple.png';

const Error = () => {
  const mobileStyle = {
    container: {
      padding: '70px 0'
    },
    h1: {
      color: '#FFF',
      fontSize: '100px',
      lineHeight: '100px',
      margin: 0
    },
    p: {
      color: '#FFF',
      fontSize: '32px'
    },
    meeple: {
      height: '50vh',
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: '-1'
    }
  };

  const desktopStyle = {
    container: {
      padding: '100px 50px',
      width: '70%'
    },
    h1: {
      color: '#FFF',
      fontSize: '150px',
      lineHeight: '150px',
      margin: 0
    },
    p: {
      color: '#FFF',
      fontSize: '36px'
    },
    meeple: {
      height: '80vh',
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: '-1'
    }
  };

  const style = function () {
    if (window.innerWidth < 800) {
      return mobileStyle;
    }
    return desktopStyle;
  };

  return (
    <div>
      <div style={style().container}>
        <h1 style={style().h1}>Oops...</h1>
        <p style={style().p}>
          The page you&apos;re looking for doesn&apos;t exist.
          {' '}
          <br />
          <span style={{ fontSize: '15px' }}>Error Code: 404</span>
        </p>
      </div>
      <img src={meeple} alt="Logo" style={style().meeple} />
    </div>
  );
};

export default Error;