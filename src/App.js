import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Parent from './parent'
import valueContext from './valueContext';


function App() {
  //let [number, setNumber]= useState(45);
  let value= useState(98)
  let number= useReducer()
  return (
    <valueContext.Provider value={value}>
      <div>
        Hello World
        <Parent></Parent>
        
      </div>
    </valueContext.Provider>
  );
}

export default App;
