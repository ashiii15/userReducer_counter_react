import './App.css';
import React from 'react';
import ComponentC from './Components/ComponentC';
import CounterOne from './Components/CounterOne';
export const UserContex = React.createContext()


function App() {
  return (
    <div className="App">
      <CounterOne></CounterOne>
      {/* <UserContex.Provider value ={'almas'}> */}
      {/* <ComponentC></ComponentC> */}
      {/* </UserContex.Provider> */}
      {/* <DataFetching></DataFetching> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <Counter></Counter> */}
      {/* <MousePosition></MousePosition> */}
    
    </div>
  );
}

export default App;
