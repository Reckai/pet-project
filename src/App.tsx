import React from 'react';

import './App.css';
import Input from './components/input/Input';
import Button from './components/Button/Button';
import InfoPanel from './components/InfoPanel/InfoPanel';

import ColumnsWrapper from './components/ColumnsWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <Input />
          <div>
            <Button />
          </div>
        </div>
        <InfoPanel />
      </header>
      <main className="App-main">
        <ColumnsWrapper />
      </main>
    </div>
  );
}

export default App;
