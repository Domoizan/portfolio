import Card from "../../components/Card/Card"
import ListCards from "../../components/ListCadrs/ListCards"
import {apropos, projets,formations,experiences } from './../../assets/data'
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
                    <li className="button color-teal"><a>Mes Projets</a></li>
                    <li className="button color-teal"><a>Formation</a></li>
                    <li className="button color-teal"><a>Expériences</a></li>
                </ul>
            </div>
        </header>
        <div className="contenu">
            <main className="main"> 
                <section className="apropos">
                    <Card Class='apropos' info={apropos}/>
                </section>
                <section className="projets">
                    <h2 className="titre">Mes projets</h2>
                    <ListCards Class='card' infoCard={projets}/>
                </section>

                <section className="formation">
                    <h2>Mes Formations</h2>
                    <ListCards Class='formation' infoCard={formations}/>
                </section>
                <section className="expériences">     
                    <h2>Mes Expériences</h2>
                    <ListCards Class='expérience' infoCard={experiences}/>
                </section>
            </main>
            <aside className="aside">
                <img src="./src/images/lee-campbell-DtDlVpy-vvQ-unsplash.webp" alt="image bureau"/>
                <div className="competences">
                    <h2 className="titre">Compétences</h2>
                    <hr/>
                    <ul className="competences">
                        <li><span>Html</span><img src="./src/images/icones/icons8-html-100.png" alt="Html" className="competence"/></li>
                        <li><span>CSS</span><img src="./src/images/icones/icons8-css-40.png" alt="CSS" className="competence"/></li>
                        <li><span>JavaScript</span><img src="./src/images/icones/icons8-javascript-48.png" alt="JavaScript" className="competence"/></li>
                        <li><span>Sass</span><img src="./src/images/icones/icons8-toupet-50.png" alt="Sass" className="competence"/></li>
                        <li><span>React</span><img src="./src/images/icones/icons8-réagir-40.png" alt="React" className="competence"/></li>
                    </ul>
                    <hr/>
                    <ul className="competences">
                        <li><span>Html</span><img src="./src/images/icones/icons8-html-100.png" alt="Html" className="competence"/></li>
                        <li><span>CSS</span><img src="./src/images/icones/icons8-css-40.png" alt="CSS" className="competence"/></li>
                        <li><span>JavaScript</span><img src="./src/images/icones/icons8-javascript-48.png" alt="JavaScript" className="competence"/></li>
                        <li><span>Sass</span><img src="./src/images/icones/icons8-toupet-50.png" alt="Sass" className="competence"/></li>
                        <li><span>React</span><img src="./src/images/icones/icons8-réagir-40.png" alt="React" className="competence"/></li>
                    </ul>
   
                </div>
            </aside>
            <div className="bta button">
                <a className="button color-teal" href="mailto:email@example.com?cc=secondemail@example.com&subject=Mail from our Website">Me contacter</a>
            </div>
        </div>  
        <footer className="footer">Pied de page</footer>

    </div>
    )
}

export default Home