
import { useState } from "react";
const App =()=>{

const [name,setName]=useState('')
const [email,setEmail]=useState('');
const [list,setList]=useState([]);

const [myname,setMyName]=useState('vladimir machkovski');

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(name,email);
  const date = {name,email}
  if(name&&email){
    setList((ls)=>[...ls,date])
    setName('')
    setEmail('')
  }
}

const showMyName = ()=>{
 setMyName('kocho')
}

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <input email='email' placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button>add</button>
      </form>
        <button onClick={showMyName}>show the name</button>
      {
        list.map((a)=>{
          return(
              <div>
          <li>{a.name}</li>
          <li>{a.email}</li>
        </div>
          )
        })
      }

    </div>
  )
}

export default App;