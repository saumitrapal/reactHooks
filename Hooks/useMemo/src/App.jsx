import { useState} from 'react'



function App() {
  
  const [Counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  let count = 0;
 for (let i = 0; i<= inputValue ; i++) {
  count = count + 1;
 }

 function Input(e) {
  setInputValue(e.target.value);
}

function Cont() {
  setCounter(Counter + 1);
}
 

  
  return (
   <div>
    <input onChange={Input} placeholder={"Find sum from 1 to n"}></input>
    <br />
    <h3>Sum from 1 to {inputValue} is {count}</h3>
    <br />
    <button onClick={Cont}>Counter {Counter}</button>
   </div>
  )
}

export default App
