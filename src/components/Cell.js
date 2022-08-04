import React from 'react';
import '../App.css';

const Cell = ({val, chooseCell}) => {
  return (
    <div className="cells" onClick={chooseCell}>
      {val}
    </div>
  )
}

export default Cell;