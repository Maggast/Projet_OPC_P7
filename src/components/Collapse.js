import { useState } from 'react'
import DownArrow from '../assets/downarrow.png'
import UpArrow from '../assets/uparrow.png'


function Collapse(props){
   const [isOpen, setIsOpen] = useState(true)
    
    return (
    isOpen ? (
		<div className='collapse'>
		    <button  onClick={() => setIsOpen(false)}>
            <h2>{props.label}</h2>
            <img src={DownArrow} alt='ouvrir description'/>
            </button>
        </div>
        
            ) : (
        <div className='collapse'>
            <button onClick={() => setIsOpen(true)}>
            <h2>{props.label}</h2>
            <img src={UpArrow} alt='fermer description' />
            </button>
            {props.children}
		</div>
        
	))


    
} 

export default Collapse