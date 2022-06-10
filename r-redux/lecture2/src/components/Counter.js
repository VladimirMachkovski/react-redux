import { useSelector, useDispatch } from "react-redux";

const Counter =()=>{
  const value = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const increase =()=>{
    dispatch({type:"INC"})
  }
  const decrease=()=>{
    dispatch({type:'DEC'})
  }
  const increaseTen =()=>{
    dispatch({type:"ADD", payload:10})
  }
  const zero = ()=>{
    dispatch({type:"DEL"})
  }
  return(
    <>
    <h1>Counter</h1>
    <h3>{value}</h3>
    <button onClick={increase}>Decrease</button>
    <button onClick={decrease}>Increase</button>
    <button onClick={increaseTen}>IncreaseTeh</button>
    <button onClick={zero}>Back to 0</button>
    </>
  )
}

export default Counter;