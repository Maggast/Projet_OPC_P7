import Redstar from '../assets/red-star.png'
import Greystar from '../assets/grey-star.png'

function Rating(props){
if (props.rating == 0){
    return(
        <div className='stars-content'>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
        </div>
    )
}
if (props.rating == 1){
    return(
        <div className='stars-content'>
    <img src= {Redstar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
        </div>
    )
}
if (props.rating == 2){
    return(
        <div className='stars-content'>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
        </div>
    )
}
if (props.rating == 3){
    return(
        <div className='stars-content'>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Greystar} alt=''/>
    <img src= {Greystar} alt=''/>
        </div>
    )
}
if (props.rating == 4){
    return(
        <div className='stars-content'>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Greystar} alt=''/>
        </div>
    )
}
if (props.rating == 5){
    return(
        <div className='stars-content'>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
    <img src= {Redstar} alt=''/>
        </div>
    )
}



}

export default Rating