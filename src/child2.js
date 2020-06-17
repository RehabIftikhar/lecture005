import React, {useContext, useReducer} from 'react';
import numberReducer from './numberReducer'

function Child2() {
  let [state, dispatch]= useReducer(numberReducer, 65);
  
  return (
    <div>

      
        Child two {state}

<button onClick= {()=>{dispatch ({type : 'INCREMENT', val : 67}); }}> Increment value</button>
<button onClick= {()=>{dispatch ({type : 'DECREMENT', val : 34}); }}> Decrement value </button>
    </div>
  );
}

export default Child2;