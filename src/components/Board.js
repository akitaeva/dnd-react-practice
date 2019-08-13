import React from 'react';
import Square from './Square';
import Knight from './Knight';

const Board = ({ knightPosition }) => {
  const squares = []

  const renderSquare = (i, [knightX, knightY]) => {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
      <div key={i} style={{ width: '12.5vw', height: 'auto' }}>
        <Square black={black}>{piece}</Square>
      </div>
    )
  }  

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}

export default Board;