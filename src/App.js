import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
const [prevOperand,setPrevOperand] = useState([])

const readInput = (e)=>{
  let input = parseInt(e.target.innerText);
  if(prevOperand.length>=0){
    setPrevOperand([...prevOperand,input])
  }
}

const readOperator = (e)=>{
  let input = e.target.innerText;
  if(prevOperand.length>=0){
    setPrevOperand([...prevOperand,input])
  }
}
const clearAllPrevOperands = ()=>{
  setPrevOperand([])

}
const deletePrevOperand = ()=>{
  let currArray = prevOperand
  console.log(currArray)
  prevOperand.pop()
  console.log(currArray)
  setPrevOperand([...prevOperand])
}
const results = ()=>{
let arrayExpression = prevOperand;
let mathExpression=parseInt(arrayExpression.toString())
console.log(mathExpression)

}

const [currOperand,setCurrOperand] = useState(null)
  return (
    <div className='calculator-grid'>
    <div className='output'>
      <div className='previous-operand'> {prevOperand} </div>
      <div className='current-operand'>5423</div>
    </div>
    <button className='span-two' onClick={()=>clearAllPrevOperands()}> AC</button>
    <button  className="btn" onClick={()=>deletePrevOperand()}> DEL</button>
    <button onClick={(e)=>readOperator(e)}> /</button>
    <button onClick={(e)=>readInput(e)}> 1</button>
    <button onClick={(e)=>readInput(e)}> 2</button>
    <button onClick={(e)=>readInput(e)}> 3</button>
    <button onClick={(e)=>readOperator(e)}> *</button>
    <button onClick={(e)=>readInput(e)}> 4</button>
    <button onClick={(e)=>readInput(e)}> 5</button>
    <button onClick={(e)=>readInput(e)}> 6</button>
    <button onClick={(e)=>readOperator(e)}> +</button>
    <button onClick={(e)=>readInput(e)}> 7</button>
    <button onClick={(e)=>readInput(e)}> 8</button>
    <button onClick={(e)=>readInput(e)}> 9</button>
    <button onClick={(e)=>readOperator(e)}> -</button>
    <button onClick={(e)=>readOperator(e)}> .</button>
    <button onClick={(e)=>readInput(e)}> 0</button>
    <button className='span-two'onClick={()=>results()}>=</button>




    </div>
  );
}

export default App;
