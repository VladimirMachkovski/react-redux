import { useState } from "react";
const App = ()=>{
  
  const [count,setCount]= useState(0);
  const [theme,setTheme]=useState('');

  const decrease = ()=>{
    setCount(count + -1)
    setTheme('blue')
  }
  const increase =()=>{
    setCount(count +1)
    setTheme('green')
  }
  return(
     <>
    <h1>Counter</h1>
    <button onClick={decrease}>-</button>
    <h1>{count}</h1>
    <h1>{theme}</h1>
    <button onClick={increase}>+</button>

    </>
  )
}

export default App;