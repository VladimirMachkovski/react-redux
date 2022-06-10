import {Link} from 'react-router-dom';

const Nav =()=>{
  return(
    <ul>
      <li><Link to='/cars'>show cars</Link></li>
      <li><Link to='/motors'>show motors</Link></li>
      <li><Link to='truks'>show truks</Link></li>
    </ul>
  )
}

export default Nav;