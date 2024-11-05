/* eslint-disable react/prop-types */

import DetailModale from "../DetailModale/DetailModale"


const CardModale = ( 
{   
    Class='card',
    info = {
        cover:"./src/images/kasa.png",
        iimageAlt:"",
        titre:"titre",
        description:'description',
        detail:[]
    },
    closeModal=null})=>{
    
    return (
        <article className={`${Class}`}>
            <img src={`${info.info.cover}`} alt={`${info.info.imageAlt}`}/>
            <h2 className="titre">{`${info.info.titre}`}</h2>
            <p className="min_descipt">{`${info.info.description}`}</p>
            <div className="detail">
                <DetailModale detail={info.info.detail} liens={info.info.liens} techno={info.info.techno}/>
            </div>
            <button onClick={closeModal}>Fermer</button>
        </article>
    )
}

export default CardModale