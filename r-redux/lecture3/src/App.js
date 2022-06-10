import {useSelector , useDispatch} from 'react-redux';
import {actions} from './store/index';
const App = ()=>{
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increaseValue=()=>{
    dispatch(actions.increment())
  }
  const decreaseValue =()=>{
    dispatch(actions.decrement())
  }
  const increaseTen=()=>{
    dispatch(actions.addBy(10))
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