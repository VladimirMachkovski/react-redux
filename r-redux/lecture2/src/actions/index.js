import {createStore} from 'redux';

const Counter = (state={counter:0},action)=>{

  if(action.type==='INC'){
    return {counter:state.counter +1}
  }
  if(action.type==="DEC"){
    return {counter:state.counter -1}
  }
  if(action.type === 'ADD'){
    return {counter:state.counter + action.payload}
  }
  if(action.type === "DEL"){
    return {counter:state.counter = 0}
  }
  return state;
}

const action = createStore(Counter);
export default action;