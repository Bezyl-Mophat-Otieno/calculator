import './App.css';
import { useState,useEffect} from 'react';
import { cleanup } from '@testing-library/react';
function App() {
  

const clearEntireExpression=()=>{
setValue("")
setResults("")
}
const deleteExpression=()=>{
  setValue(value.slice(0,-1))
}

const compute= ()=>{
try {
const res = eval(value)
setResults(()=>res)
} catch (error) {
 
}  
}


const[value,setValue]=useState("")
const[results,setResults]=useState("")

  return (
    <div className='calculator-grid'>
    <div className='output'>
      <div className='expression'>{value}</div>
      <div className='results'>{results}</div>
    </div>
    <button className='span-two' onClick={()=>clearEntireExpression()}> AC</button>
    <button  className="btn" onClick={()=>deleteExpression()}> DEL</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="/">/</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="1">1</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="2">2</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="3">3</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="*">*</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="4">4</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="5">5</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="6">6</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="+">+</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="7">7</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="8">8</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="9">9</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="-">-</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value=".">.</button>
    <button onClick={(e)=>setValue(value + e.target.value)} value="0">0</button>
    <button className='span-two' onClick={()=>compute()} >=</button>




    </div>
  );
}

export default App;
