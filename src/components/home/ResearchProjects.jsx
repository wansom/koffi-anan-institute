import { useState, useEffect } from "react"
import { getData } from '../../services';
const ResearchProjects =()=>{
    const [projects,setProjects]= useState([]);
    useEffect(() => {
      getData('https://kacit.twafwane.com/wp-json/wp/v2/posts/?categories=9&_embed').then((data)=>{
        setProjects(data)
      })
    }, []);
    return (
        <section className="projects">
        <div className="projects-container container">
            <div className="projects-head">
                <h1>Research Projects</h1>
            </div>
            <div className="projects-content">
                {projects.map((project,index)=>(
                <div className="project" key={index}>
                <img src={project._embedded['wp:featuredmedia'][0].source_url}></img>
                <div className="project-info">
                    <h2 dangerouslySetInnerHTML={{ __html: project.title.rendered }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: project.content.rendered }}></p>
                    <a href="researchProjects"><button>Learn More</button></a>
                </div>
            </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default ResearchProjects