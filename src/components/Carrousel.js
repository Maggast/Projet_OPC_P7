import { useState } from 'react';
import BackArrow from'../assets/backarrow.png'
import ForwardArrow from'../assets/forwardarrow.png'
import'../styles/Carrousel.css'

const defaultSlide = 0;

function Carrousel (props)  {

 let [currentSlide, setCurrentSlide] = useState(defaultSlide);
 const updateSlide = (nextSlide) => {      
    setCurrentSlide(nextSlide);
  }
  if(props.data.length > 1 ){
    console.log(props.data.length);

  return(
    <div className="carrousel">
            <div className="slider-content">
              {props.data.map((image,index) => 
                { if(index === currentSlide )  { 

                  return(
                    <div key={image.toString()} >                 
                    <div className='picture-content'>
                      <img src={image} alt='img'  className='logementpicture'/>
                      <div className ='picturenumber'>
                        {currentSlide+1}/{props.data.length}</div>
                   </div>
                   </div>)
                }})}
                
                  <button className='btn-back'
                    onClick={() =>
                    {if (currentSlide !== 0){
                        updateSlide(currentSlide - 1);
                        console.log(currentSlide);
                    }else{
                        currentSlide = props.data.length -1;
                        updateSlide(currentSlide);
                        console.log(currentSlide);
                    }}}>
                    <img src={BackArrow} alt='back arrow'/>
                </button>
                <button className='btn-forward'
                    onClick={() =>
                    {if (currentSlide < props.data.length-1 ){
                        updateSlide(currentSlide + 1);
                        console.log(currentSlide);
                        console.log(props.data.length)
                    }else{
                        currentSlide = 0;
                        updateSlide(currentSlide );
                        console.log(currentSlide);
                  }}}>
                 <img src={ForwardArrow} alt='forward arrow'/>
              </button>       
            </div>
        </div>
       )
      }else{

        return(
          <div className="carrousel">
            <div className="slider-content">
              {props.data.map((image,index) => {
                 if(index === currentSlide )  { 

                  return(
                    <div key={image.toString()} >                 
                    <div className='picture-content'>
                      <img src={image} alt='img'  className='logementpicture'/>
                    </div>
                    <div className ='picturenumber'>
                        {currentSlide+1}/{props.data.length}
                      </div>
                  </div>)}})}
              </div>
           </div>)}      
   }
   
export default Carrousel;





