import React, {useContext, useReducer}from 'react';
import numberReducer from './numberReducer'

function Child() {
  let [state, dispatch]= useReducer(numberReducer, 65);
  
  return (
    <div>

      
        Child 2 {state}
    </div>
  );
}

export default Child;