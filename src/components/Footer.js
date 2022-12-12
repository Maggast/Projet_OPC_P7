import Whitelogo from '../assets/white-logo.png'
import '../styles/Footer.css'

function Footer(){

    return (
        <div className='footer'>
            <img src={Whitelogo} alt='logo blanc'/>
            <span className='footer-text'>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer