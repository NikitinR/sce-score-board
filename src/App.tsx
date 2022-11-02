import React from 'react';

import Game from './features/Game/Game';

import './App.css';
import GamesSummaryList from './features/GameSummaryList/GameSummaryList';

function App() {
  return (
    <div className='App'>
      <Game />
      <GamesSummaryList />
    </div>
  );
}

export default App;
