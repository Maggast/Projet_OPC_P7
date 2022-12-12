import '../styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav(){

    return(
        <div className='nav'>
            <Link to='/'>Accueil</Link>
            <Link to='/apropos'>A Propos</Link>

        </div>
    )
}

export default Nav