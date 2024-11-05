/* eslint-disable react/prop-types */

import Card from "../Card/Card"
import Modale from "../Modale/Modale"

const ListCards = ({ Class='card', infoCard=[{
    cover:'./src/images/kasa.png',
    imageAlt:'copie d\'écran site Kasa',
    titre:'Kasa immobilier',
    description:'Description du projet kasa'
}]})=>{

switch(Class){
    case 'card' :
        return (
            <>
            {        
            infoCard.map(
                (info,idx)=> ( 
                        <div key={`card_${Class}-${idx}`}>
                            <Modale Class={Class} info={info}/>
                        </div>
                    )
                )
            }
            </>
        )
    default :
        return (
            <>
            {        
            infoCard.map(
                (info,idx)=> (     
                    <Card Class={Class} info={info} key={`card_${Class}-${idx}`}/>
                    )
                )
            }
            </>
        )
    }
}

export default ListCards