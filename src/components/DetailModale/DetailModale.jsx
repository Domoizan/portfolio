/* eslint-disable react/prop-types */

//import {projets} from '../../assets/data'


const DetailModale = ({
    detail=[{titre:"titre",para:["paragraphe 1","paragraphe 2"]}],
    techno=[{nom:'Html',altimg:'icone Html',icone:'/images/icones/html.png'}],
    liens=[{lib:'Repository',lnk:'#',icone:'',altimg:'liens vers repository github'}] })=>{

    return (
        <>
        {
            detail.map((elt,idx)=>(
                <div key={`detail-${idx}`}>
                <p className="titre" key={idx}>{elt.titre}</p>
                {
                elt.para.map((txt,idx)=>(
                    <p key={idx}>{`${txt}`}</p>
                ))
                }
                </div>
            ))
        }
        {
            <div className="liens">
                <ul>
                    {
                    liens.map((lnk,idx)=>(
                        <li className="liens" key={idx}>
                            <a target="_blank" href={`${lnk.lnk}`} className="liens">{lnk.lib}</a>
                            <img src={`${lnk.icone}`} alt={`${lnk.altimg}`} className="liens"/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        }
        {
            <div className="techno">
                <ul>
                    {
                    techno.map((tech,idx)=>(
                        <li className="techno" key={idx}><span>{tech.nom}</span><img src={`${tech.icone}`}  className='techno' alt={`${tech.altimg}`}/> </li>
                    ))
                    }
                </ul>
            </div>
        }
        </>
    )
}

export default DetailModale