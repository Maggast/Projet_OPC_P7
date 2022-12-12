import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Error404.css'


function Error404 (){

    return(
        <div>
            <Header/>
            <div className='error404'>
            <span className='code404'>404</span>
            <span className='oups'>Oups! La page que vous demandez n'existe pas.</span>
            <Link to='/'className='pagereturn'>Retourner sur la page d’accueil</Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Error404