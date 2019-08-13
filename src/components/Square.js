import React from 'react';

 const Square = ({ black, children }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '80px',
        height: '80px',
      }}
    >
      {children}
    </div>
  )
}

export default Square;