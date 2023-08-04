import { useState, useEffect } from "react"
import { getData } from '../../services';
const ResearchProjects =()=>{
    const [projects,setProjects]= useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        fetch(
            "https://kacit.twafwane.com/wp-json/wp/v2/research?orderby=date&order=asc"
          )
            .then((response) => response.json())
            .then((posts) => {
              const promises = posts.map((post) => {
                return fetch(
                  `https://kacit.twafwane.com/wp-json/wp/v2/media/${post.featured_media}`
                )
                  .then((response) => response.json())
                  .then((media) => {
                    post.featured_image_url = media.source_url;
                    return post;
                  });
              });
              return Promise.all(promises);
            })
            .then((courses) => {
              setProjects(courses);
              setloading(false);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <section className="projects">
        <div className="projects-container container">
            <div className="projects-head">
                <h1>Research Projects</h1>
            </div>
            {loading&&(
                <p>Loading...</p>
            )}
            <div className="projects-content">
                {projects?.slice(-2).reverse().map((project,index)=>(
                <div className="project h-[834px] md:h-[694px]" key={index}>
                <img src={project.featured_image_url}></img>
                <div className="project-info">
                    <h2 dangerouslySetInnerHTML={{ __html: project.title.rendered }}></h2>
                    <p>{project.acf.overview?.slice(0,280)}...</p>
                    <a href={`/researchProject/${project.slug}`}><button>Learn More</button></a>
                </div>
            </div>
                ))}
            </div>
        </div>
    </section>
    )
}


export default ResearchProjects