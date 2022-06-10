import {useSelector , useDispatch} from 'react-redux';

const App = ()=>{
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increaseValue=()=>{
    dispatch({type:'INC'})
  }
  const decreaseValue =()=>{
    dispatch({type:"DEC"})
  }
  const increaseTen=()=>{
    dispatch({type:"ADD",payload:10})
  }

  return(
    <>
    <h1>Counter</h1>
    <h3>{counter}</h3>
    <button onClick={increaseValue}>increase the value</button>
    <button onClick={decreaseValue}>decrease the value</button>
    <button onClick={increaseTen}>increase the value for 10</button>
    </>
  )
}

export default App;