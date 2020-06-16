import React, {useContext}from 'react';
import valueContext from './valueContext'

function Child() {
  let value= useContext(valueContext);
  console.log('value', value);
  let updateValue= value[1]
  return (
    <div>

      
        Child number {value[0]};
        <button onClick= {()=>{ updateValue(++value[0])}} > Update Value </button>
    </div>
  );
}

export default Child;
