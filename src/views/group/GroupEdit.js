import React from 'react';

const GroupEdit = (props) => {
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
        Group Edit
      </p>
      <p style={style.p}>
        This page is coming soon!
      </p>
    </div>
  );
}

export default GroupEdit;