/* eslint-disable react/prop-types */


const Navfooter = ({liens=[{lnk:'#',icone:'',altimg:''}]})=>{
    return(
    <nav >
    <ul>
        {
            liens.map((lnk,idx)=>(
                <li key={idx}><a href={lnk.lnk} target="_blanc"><img src={lnk.icone} alt={lnk.altimg} /></a></li>
            ))
        }
    </ul>
    </nav>
    )
}

export default Navfooter