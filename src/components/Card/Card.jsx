/* eslint-disable react/prop-types */

import { useState } from "react"

const Card = ( 
{   
    Class='apropos',
    info = {
        cover:null,
        iimageAlt:"",
        titre:"titre",
        description:'description',
        detail:[]
    },
    openModale=null
}
    )=>{

    const [isOpen, setIsOpen] = useState(false)
    const toggle=()=>{
        const val=!isOpen
        setIsOpen(val)
    }
    
    const maclass=isOpen?"toggle opendiv":"toggle closediv"
    const icone=isOpen?<i className="fa-solid fa-chevron-down open"></i>:<i className="fa-solid fa-chevron-down close"></i>
    const fnct=Class==='card'?openModale:null

   Class==="card" ? info = info.info:info
    return (
        <article className={`${Class}`} onClick={fnct}>
            {info.cover && ( <img src={`${info.cover}`} alt={`${info.imageAlt}`}/>) }
            {Class==='card'?<h3 className="titre">{`${info.titre}`}</h3>:<h2 className="titre">{`${info.titre}`}</h2>}
            <p>{`${info.description}`}</p>
            {(Class==='expérience' && isOpen)? (
                <div className={maclass}>
                    {
                        info.detail.map((det,idx)=>( 
                            <p key={idx}>{det}</p>
                        ))
                    }
            </div>):(null) }
            {Class==='expérience'?<button onClick={toggle}>{icone}</button>:null}
        </article>
    )
}

export default Card