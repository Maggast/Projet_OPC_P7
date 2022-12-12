import { Navigate, useParams } from 'react-router-dom'
import LogementsList from '../datas/logements.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Collapse from '../components/Collapse'
import Carrousel from '../components/Carrousel'
import Rating from '../components/Rating'
import'../styles/Fichelogement.css'


function Fichelogement(){
const {id} = useParams()
const findLogement = LogementsList.find((logement)=>logement.id === id)
if(findLogement !== undefined){

    return(
        <div className ='fichelogement'> 
          <Header/> 
            {LogementsList
            .filter((list)=>list.id === id)            
            .map((list)=>
                <div key={list.toString}>
                    <Carrousel data = {list.pictures}/>
                    <div className='lodge-info'>
                        <div className ='title'>{list.title}</div>
                        <div className='location'>{list.location}</div>
                        <div className='tags-content'>
                         {list.tags.map((tag)=>
                             <div key={tag}>
                                <ul className='tag'>{tag}</ul>
                            </div>)}
                        </div>
                        <div className='host'>
                            <div className='host-name'>{list.host.name}</div>
                            <img className='host-picture' src={list.host.picture} alt={list.host.name}></img>
                    </div>
                    <Rating rating = {list.rating}/>
                    </div>
                    <div className='collapses-content'>
                    <Collapse label='Description'>
                        <div className ='detail'>
                            <p>{list.description}</p>
                        </div>
                    </Collapse> 
                    <Collapse label='Équipements'>
                        <div className='detail'>
                            {list.equipments.map((equipment)=>
                                <div key={equipment} >
                                    <ul>{equipment}</ul>
                                </div>
                                )}
                        </div>
                    </Collapse>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
        )
    }else{
        return <Navigate to='/Error404' />
    }
}

export default Fichelogement