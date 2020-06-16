import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Parent from './parent'


function App() {
  let (number, setNumber)= useState(0)
  return (
    <div className="App">
      Hello World
      <Parent num={number}></Parent>
     
    </div>
  );
}

export default App;
