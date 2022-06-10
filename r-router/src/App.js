import Nav from './nav/Nav';
import Cars from './components/Cars';
import Motorcikles from './components/Motors';
import { Truks } from './components/Truks';
import {Routes, Route}from 'react-router-dom';
const App =()=>{
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='cars' element={<Cars/>}/>
      <Route path='motors' element={<Motorcikles/>}/>
      <Route path='truks' element={<Truks/>}/>
    </Routes>
    </>
  )
}

export default App;