/* eslint-disable react/prop-types */

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
        console.log(`Class = ${Class} info = ${info}` )
    return (
        <article className={`${Class}`}>
            {info.cover && ( <img src={`${info.cover}`} alt={`${info.imageAlt}`}/>) }
            {Class==='card'?<h3 className="titre">{`${info.titre}`}</h3>:<h2 className="titre">{`${info.titre}`}</h2>}
            <p>{`${info.description}`}</p>
        </article>
    )
}

export default Card