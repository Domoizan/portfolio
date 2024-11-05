import { competences } from "../../assets/data"

const ListComp=()=>{
return (
    <>
        {
            competences.map((item)=>(
                <div key={`${item.id}`}> 
                <hr/>
                <h3 >{item.categorie} </h3>
                <ul>
                {item.lst.map((comp)=>( 
                    
                    <li key={`${comp.id}`}><span>{comp.nom}</span><img src={comp.icone} alt={comp.iconeAlt}/></li>
                
                ))}
                </ul>
            </div>
            ))
        }
    </>    
)
}
export default ListComp