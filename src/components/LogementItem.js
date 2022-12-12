import '../styles/LogementItem.css'

function LogementItem ({cover,title}){
    return(
        <div className='logementitem'>
            <img src={cover} alt={title}/>
            <div className='logementitem-text'>{title}</div>
        </div>
    )}

export default LogementItem