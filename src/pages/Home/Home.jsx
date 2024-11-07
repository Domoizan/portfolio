import Card from "../../components/Card/Card"
import ListCards from "../../components/ListCadrs/ListCards"
import ListComp from "../../components/listComp/ListComp"
import Navfooter from "../../components/Navfooter/Navfooter"
import {apropos, projets,formations,experiences,liens } from './../../assets/data'
export const Home=()=>{
    

    return (
    <div className="container">
        <header className="header">
            <div className="bandeau">
                <h1>Dominique MOIZAN</h1>
                <p className="fonction">Développeur web</p>
            </div>
            <div className="nav">
                <ul className="button">
                    <li className="button color-teal"><a href="#projets">Mes Projets</a></li>
                    <li className="button color-teal"><a href="#formation">Formation</a></li>
                    <li className="button color-teal"><a href="#experiences">Expériences</a></li>
                </ul>
            </div>
        </header>
        <div className="contenu">
            <main className="main"> 
                <section className="apropos">
                    <Card Class='apropos' info={apropos}/>
                </section>
                <section id='projets'className="projets">
                    <h2 className="titre">Mes projets</h2>
                    <ListCards Class='card' infoCard={projets}/>
                </section>

                <section id="formation" className="formation">
                    <h2>Mes Formations</h2>
                    <ListCards Class='formation' infoCard={formations}/>
                </section>
                <section id="experiences" className="expériences">     
                    <h2>Mes Expériences</h2>
                    <ListCards Class='expérience' infoCard={experiences}/>
                </section>
            </main>
            <aside className="aside">
                <img src="/images/lee-campbell-DtDlVpy-vvQ-unsplash.webp" alt="image bureau"/>
                <div className="competences">
                    <h2 className="titre">Compétences</h2>
                    <ListComp/>
                </div>
            </aside>
            <div className="bta button">
                <a className="button color-teal" href="mailto:moizand@live.fr?subject=Mail from our Website">Me contacter</a>
            </div>
        </div>  
        <footer className="footer">
            <h2>Dominique MOIZAN</h2>
            <Navfooter liens={liens}/>

        </footer>

    </div>
    )
}

export default Home