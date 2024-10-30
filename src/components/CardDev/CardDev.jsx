/* eslint-disable react/prop-types */

import { useState } from "react"

const CardDev = ( 
{   
    Class='apropos',
    info = {
        cover:null,
        iimageAlt:"",
        titre:"titre",
        description:'description'
    }
}
    )=>{

    const [isOpen, setIsOpen] = useState(false)
    const toggle=()=>{
        const val=!isOpen
        setIsOpen(val)
    }
    return (
        <article className={`${Class}`}>
            {info.cover && ( <img src={`${info.cover}`} alt={`${info.imageAlt}`}/>) }
            {Class==='card'?<h3 className="titre">{`${info.titre}`}</h3>:<h2 className="titre">{`${info.titre}`}</h2>}
            <p>{`${info.description}`}</p>
            
            {(Class==='expérience' && isOpen)? (
                <div className="toggle">
                    <p>contenu div toggle</p>
            </div>):(null) }
            {Class==='expérience'?<button onClick={toggle}>X</button>:null}
        </article>
    )
}

export default CardDev