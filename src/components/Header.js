import Redlogo from '../assets/red-logo.png'
import Nav from './Nav'
import '../styles/Header.css'


function Header() {
  return (
    <div className ='header'>
      <img className='redlogo'src={Redlogo} alt='logo rouge kasa' />
      <Nav/>
    </div>
    
  );
}

export default Header;
