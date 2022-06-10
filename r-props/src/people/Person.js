
import Names from '../components/Names';
import LastName from '../components/LastName';

const Person =()=>{

    const name1 = 'vladimir';
    
    const lastname1 = 'machkovski';
   

  return(
    <>
    <Names ime={name1}/>
    <LastName prezime={lastname1}/>
    </>
  )
}
export default Person;