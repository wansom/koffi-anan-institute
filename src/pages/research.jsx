import { useState, useEffect } from "react";
import AboutHero from "../components/about/hero";
import AllResearch from "../components/research-projects/all-research";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/research-program.png";

const ResearchProjects = () => {
  const [research, setResearch] = useState([]);
  const [loading, setloading] = useState(false);
  const [ongoing, setongoing] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [consultancy, setconsultancy] = useState([]);

 const fetchCompleted=()=>{
  fetch(
    "https://kacit.twafwane.com/wp-json/wp/v2/research?orderby=date&order=asc&acf_project_status=Completed"
  )
    .then((response) => response.json())
    .then((posts) => {
      const promises = posts.map(async (post) => {
        const response = await fetch(
          `https://kacit.twafwane.com/wp-json/wp/v2/media/${post.featured_media}`
        );
        const media = await response.json();
        post.featured_image_url = media.source_url;
        return post;
      });
      return Promise.all(promises);
    })
    .then((courses) => {
      setResearch(courses);
      let completed = courses.filter((course)=>course.acf.project_status==='Completed')
      let ongoing = courses.filter((course)=>course.acf.project_status==='Ongoing')
      let consultancy = courses.filter((course)=>course.acf.project_status==='consultancy')
      setcompleted(completed)
      setongoing(ongoing)
      setconsultancy(consultancy)
      setloading(false);
     
    })
    .catch((error) => console.error(error));
  }

  useEffect(() => {
fetchCompleted()
  },[]);
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"Research Projects"}
          subtitle="Advancing Peace and Stability through Innovative Research"
          background={background}
        />
        <main>
          <section className="research-content">
            <div className="research-container container">
              <div className="research-item">
                <div className="research-head">
                  <h1>Ongoing Projects</h1>
                </div>
                {ongoing.map((i) => (
                <div className="research-information bg-cover bg-center" style={{backgroundImage:`url(${i.featured_image_url})`}}>
                  <div className="research-status px-3">
                    <p>{i?.acf.project_status} Project</p>
                  </div>
                 
                    <div className="research-card">
                      <h3>{i.acf.project_title}</h3>
                      <p>{i?.acf.overview?.slice(0,280)}...</p>
                      <a
                        href={`/researchProject/${i.slug}`}
                        className="flex items-center gap-1"
                      >
                        Read More{" "}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_772_135"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_772_135)">
                            <path
                              d="M8.0013 13.3334L7.0513 12.4001L10.7846 8.66675H2.66797V7.33342H10.7846L7.0513 3.60008L8.0013 2.66675L13.3346 8.00008L8.0013 13.3334Z"
                              fill="#25518C"
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
              
                </div>))}
              </div>
              <div className="research-item">
                <div className="research-head">
                  <h1>Completed Projects</h1>
                </div>
                {completed.map((i) => (
                  <div className="research-information"  style={{backgroundImage:`url(${i.featured_image_url})`}}>
                    <div className="research-status px-3">
                      <p>{i.acf.project_status} Project</p>
                    </div>
                    <div className="research-card">
                      <h3>
                   {i.acf.project_title}
                      </h3>
                      <p>{i?.acf.overview?.slice(0, 280)}...</p>
                      <a
                        href={`/researchProject/${i.slug}`}
                        className="flex items-center gap-1"
                      >
                        Read More{" "}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_772_135"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_772_135)">
                            <path
                              d="M8.0013 13.3334L7.0513 12.4001L10.7846 8.66675H2.66797V7.33342H10.7846L7.0513 3.60008L8.0013 2.66675L13.3346 8.00008L8.0013 13.3334Z"
                              fill="#25518C"
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="research-item">
                <div className="research-head">
                  <h1>Consultancies</h1>
                </div>
                {consultancy.map((i) => (
                  <div className="research-information "  style={{backgroundImage:`url(${i.featured_image_url})`}}>
                    <div className="research-status px-3">
                      <p className=" capitalize whitespace-nowrap">{i.acf.project_status} Project</p>
                    </div>
                    <div className="research-card">
                      <h3>
                      {i.acf.project_title}
                      </h3>
                      <p>
                      {i?.acf.overview?.slice(0, 280)}...
                      </p>
                      <a
                        href={`/researchProject/${i.slug}`}
                        className="flex items-center gap-1"
                      >
                        Read More{" "}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_772_135"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="16"
                            height="16"
                          >
                            <rect width="16" height="16" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_772_135)">
                            <path
                              d="M8.0013 13.3334L7.0513 12.4001L10.7846 8.66675H2.66797V7.33342H10.7846L7.0513 3.60008L8.0013 2.66675L13.3346 8.00008L8.0013 13.3334Z"
                              fill="#25518C"
                            />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </main>
      <Footer />
    </div>
  );
};
export default ResearchProjects;
