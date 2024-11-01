/* eslint-disable react/prop-types */

import { useState } from "react"

const Card = ( 
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
    
    const maclass=isOpen?"toggle opendiv":"toggle closediv"
    const icone=isOpen?<i className="fa-solid fa-chevron-down open"></i>:<i className="fa-solid fa-chevron-down close"></i>
    return (
        <article className={`${Class}`}>
            {info.cover && ( <img src={`${info.cover}`} alt={`${info.imageAlt}`}/>) }
            {Class==='card'?<h3 className="titre">{`${info.titre}`}</h3>:<h2 className="titre">{`${info.titre}`}</h2>}
            <p>{`${info.description}`}</p>
            {(Class==='expérience')?<div className={maclass}><p>contenu div toggle</p></div>:null}
            {Class==='expérience'?<button onClick={toggle}>{icone}</button>:null}
        </article>
    )
}

export default Card