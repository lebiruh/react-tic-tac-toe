import { useState } from 'react';
import Cell from './components/Cell';
import './App.css';

function App() {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  const [player, setPlayer] = useState('X');

  const chooseCell = (cell) => {
    setBoard(board.map((val, idx) => {
      if (idx === cell && val === '') {
        return player;
      }
      return val;
    }))

    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    };
  }

  return (
    <div className="App">
      <div className="container">
        <div className="rows">
          <Cell val={board[0]} chooseCell={() => {chooseCell(0)}}/>
          <Cell val={board[1]} chooseCell={() => {chooseCell(1)}}/>
          <Cell val={board[2]} chooseCell={() => {chooseCell(2)}}/>
        </div>
        <div className="rows">
          <Cell val={board[3]} chooseCell={() => {chooseCell(3)}}/>
          <Cell val={board[4]} chooseCell={() => {chooseCell(4)}}/>
          <Cell val={board[5]} chooseCell={() => {chooseCell(5)}}/>
        </div>
        <div className="rows">
          <Cell val={board[6]} chooseCell={() => {chooseCell(6)}}/>
          <Cell val={board[7]} chooseCell={() => {chooseCell(7)}}/>
          <Cell val={board[8]} chooseCell={() => {chooseCell(8)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
