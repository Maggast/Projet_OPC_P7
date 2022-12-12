import Header from '../components/Header'
import Footer from '../components/Footer'
import Collapse from '../components/Collapse'
import AproposPicture from '../assets/apropospicture.png'
import '../styles/Apropos.css'

function Apropos() {
    
    return(
        <div className='apropos'>
            <Header/>
            <div className='homebanner'><img className='homepicture' src={AproposPicture} alt='montagnes enneigées' /></div>
            <Collapse label='Fiabilité' >
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </Collapse>
            <Collapse label='Respect'>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse label='Service'>
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collapse>
            <Collapse label='Sécurité'>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
            <Footer/>
        </div>
    )

}

export default Apropos