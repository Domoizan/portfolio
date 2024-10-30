import { competences } from "../../assets/data"

const ListComp=()=>{
return (
    <>
        {
            competences.map((item,idx)=>(
                <>
                <hr/>
                <h3 key={`${item.categorie}-${idx}`}>{item.categorie} </h3>
                <ul>
                {item.lst.map((comp,idx)=>(
                    <li key={`${comp.nom}-${idx}`}><span>{comp.nom}</span><img src={comp.icone} alt={comp.iconeAlt}/></li>
                ))}
                </ul>
            </>
            ))
        }
    </>
)
}
export default ListComp