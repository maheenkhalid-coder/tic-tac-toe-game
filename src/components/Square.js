import React from 'react';

const styles = {
  background: 'lightgrey',
  border: '5px solid lightblack',
  fontSize: '50px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={styles} onClick={onClick}>
    {value}
  </button>
);

export default Square;