import './App.css';
import React from 'react';
import CounterTwo from './Components/CounterTwo';
import InputRef from './Components/InputRef';
import HookTimer from './Components/HookTimer';
import DocTitleone from './Components/DocTitleone';
import DocTitlTwo from './Components/DocTitleTwo';

function App() {
  return (
    <div className="App">
      <DocTitleone></DocTitleone>
      <DocTitlTwo/>
      {/* <HookTimer/> */}
    </div>
  );
}

export default App;
