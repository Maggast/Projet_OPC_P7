import LogementItem from './LogementItem.js'
import LogementsList from '../datas/logements.json'
import '../styles/Gallery.css'
import { Link } from 'react-router-dom'

function Gallery(){
    return(
        <div className='gallery'>
           {LogementsList.map(({id,title,cover}) => 
           <div key={title}>
                    <Link to={`/fichelogement/${id}`}>
                        <LogementItem 
                        cover={cover}
                        title={title}/>
                        
                    </Link>
                    </div>
                   )}
        </div>
        )}

export default Gallery