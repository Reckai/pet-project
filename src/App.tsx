import React from 'react';
import Input from './components/input/Input';
import Button from './components/Button/Button';
import InfoPanel from './components/InfoPanel/InfoPanel';
import ColumnsWrapper from './components/ColumnsWrapper';

import './App.css';
import { SelectUrl } from './redux/searchSlice/selectors';
import { useSelector } from 'react-redux';

function App() {
  const { match } = useSelector(SelectUrl);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <Input />
          <div>
            <Button />
          </div>
        </div>
        {match.username !== '' ? <InfoPanel username={match.username} repo={match.repo} /> : null}
      </header>
      <main className="App-main">
        <ColumnsWrapper />
      </main>
    </div>
  );
}

export default App;
