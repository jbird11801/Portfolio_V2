import './work.css'

const proj_1 = {

    link : "https://github.com/jbird11801/ReadMeGenerator",

    name : "Read Me Generator"

};

const proj_2 = {

    link : "https://jbird11801.github.io/Movie_Search/",

    name : "Movie Search"
    
};

const proj_3 = {

    link : "https://github.com/jbird11801/EmployeeTracker",

    name : "Employee Tracker"
    
};


const proj_4 = {

    link : "https://young-citadel-13202-aee4f5f0145b.herokuapp.com/",

    name : "Social Media"
    
};

const proj_5 = {

    link : "https://pokemon-team-builder-zs.netlify.app",

    name : "Pokemon Team Builder"
    
};

export default function work() {

    return (

        <div id="work" className="mx-6 is-flex is-flex-direction-column">

            <a className = "my-3 text " id='button_1' target="_blank" href={proj_1.link}><h1>{proj_1.name}</h1></a> 

            <section className="is-flex is-flex-direction-column is-hidden-desktop">

                <a className = "mb-3 text" id='button_2' target="_blank" href={proj_2.link}><h1>{proj_2.name}</h1></a>

                <a className = " text " id='button_3' target="_blank" href={proj_3.link}><h1>{proj_3.name}</h1></a>

            </section>

            <section className="is-flex is-hidden-touch">

                <a className = "mr-3 text" id='button_2' target="_blank" href={proj_2.link}><h1>{proj_2.name}</h1></a>

                <a className = " text " id='button_3' target="_blank" href={proj_3.link}><h1>{proj_3.name}</h1></a>

            </section>

            <section className="is-flex is-flex-direction-column is-hidden-desktop my-3">

                <a className = "mb-3 text " id='button_4' target="_blank" href={proj_4.link}><h1>{proj_4.name}</h1></a>

                <a className = "text " id='button_5' target="_blank" href={proj_5.link}><h1>{proj_5.name}</h1></a>

            </section>

            <section className="is-flex is-hidden-touch my-3">

                <a className = "mr-3 text " id='button_4' target="_blank" href={proj_4.link}><h1>{proj_4.name}</h1></a>

                <a className = "text " id='button_5' target="_blank" href={proj_5.link}><h1>{proj_5.name}</h1></a>

            </section>

        </div>

    )

}


