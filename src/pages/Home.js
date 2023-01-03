import Header from '../components/Header'
import HomePicture from '../assets/homepicture.png'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import '../styles/Home.css'

function Home (){
  return(
    <div className='home'>
    <Header/>
    <div className='homebanner'>
    <img className='homepicture'src={HomePicture} alt='littoral maritime'></img>
    <div className='homebanner-text'>Chez vous, partout et ailleurs</div>
    </div>
    <Gallery/>
    <Footer/>
    </div>
  )
}

export default Home