import { useState, useEffect } from 'react';
import Cell from './components/Cell';
import { WinningPatterns } from './components/WinningPatterns';
import './App.css';

function App() {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('O');
  const [result, setResult] = useState({winner: 'none', state: 'none'});

  useEffect(() => {
    checkWinner();
    checkIfTie();
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    };
  }, [board]);

  useEffect(() => {
    if (result.state !== 'none') {
      alert (`Game finished! Winning Player: ${result.winner}`);
      restart();
    }
  }, [result])

  const chooseCell = (cell) => {
    setBoard(board.map((val, idx) => {
      if (idx === cell && val === '') {
        return player;
      }
      return val;
    }))
  };

  const checkWinner = () => {
    WinningPatterns.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer === '') return;
      let foundWinningPattern = true;
      pattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({winner: player, state: 'Won'})
      }
    })
  }

  const checkIfTie = () => {
    let filled = true;
    board.forEach((cell) => {
      if (cell === '') {
        filled = false;
      }
    })

    if (filled) {
      setResult({winner: 'No Winner', state: 'Tie'})
    }
  };

  const restart = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('O')
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
