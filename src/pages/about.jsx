import Choices from "../components/about/choices";
import AboutHero from "../components/about/hero";
import Mission from "../components/about/mission";
import Team from "../components/about/team";
import WhyUs from "../components/about/why-us";
import ContactUs from "../components/home/contact";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/about.jpg";
import { useState, useEffect } from "react";
import { getData } from "../services";
import KacitOverview from "../components/about/kacit-overview";

const ValuesContent = () => {
  const tabs = [
    {
      title: "Our Mission",
      desc: "Rooted in the overall mission of the University of Liberia which “strives to create an academic environment in which “outstanding students and scholars from around the world are continually challenged and inspired to do their best possible work,” the KAICT seeks to develop itself as the Center of Excellence for policy research and dialogue on peace, conflict, security, gender and development studies and to foster the deployment of such competencies and talents to all aspects of Liberia’s national recovery project. The Institute shall offer both short-term certificate and Master’s degree courses, operate a policy watch, and set standards for studies in peace, conflict, security, gender and development in Liberia.",
    },
    {
      title: "Our Vision",
      desc: "Rooted in the overall mission of the University of Liberia which “strives to create an academic environment in which “outstanding students and scholars from around the world are continually challenged and inspired to do their best possible work,” the KAICT seeks to develop itself as the Center of Excellence for policy research and dialogue on peace, conflict, security, gender and development studies and to foster the deployment of such competencies and talents to all aspects of Liberia’s national recovery project. The Institute shall offer both short-term certificate and Master’s degree courses, operate a policy watch, and set standards for studies in peace, conflict, security, gender and development in Liberia.",
    },
    {
      title: "Our Core Values",
      desc: "Rooted in the overall mission of the University of Liberia which “strives to create an academic environment in which “outstanding students and scholars from around the world are continually challenged and inspired to do their best possible work,” the KAICT seeks to develop itself as the Center of Excellence for policy research and dialogue on peace, conflict, security, gender and development studies and to foster the deployment of such competencies and talents to all aspects of Liberia’s national recovery project. The Institute shall offer both short-term certificate and Master’s degree courses, operate a policy watch, and set standards for studies in peace, conflict, security, gender and development in Liberia.",
    },
  ];
  const [active, setactvive] = useState(0);
  return (
    <div className="container mx-auto values-section">
      <div className="grid grid-cols-1 md:grid-cols-2 my-16 px-1 md:px-10">
        <div className="space-y-4">
          {tabs.map((tab, index) => (
            <div
              className={
                index === active
                  ? "tab pl-10 py-3 bg-[#25518C] text-[#FCFCFC]"
                  : "tab pl-10 py-3 bg-[#EFF1FB] text-black"
              }
              onClick={() => {
                setactvive(index);
              }}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="bg-[#25518C] p-10 text-[#FCFCFC] desc">
          {active === 0 && <p>{tabs[active].desc}</p>}
          {active == 1 && (
            <p>
              The <span>Kofi Annan Institute for Conflict Transformation</span>{" "}
              envisions a future where public policy dialogue and rigorous
              research and analysis are intrinsic to policy making and
              implementation in Liberia. It is a future in which a new
              generation of Liberians, endowed with abilities for critical and
              innovative thinking, take the lead in the definition,
              reconstruction, and administration of the Liberian state.
            </p>
          )}
          {active == 2 && (
            <ol className="list-decimal list-inside space-y-2">
              <li>
               <span> Diversity:</span> Cognizant of the multi-ethnic, multi-religious, and
                politically plural Liberian context the KAICT is committed not
                only to respect for difference but to cultivate the unique
                values of each difference so as to enrich learning and at the
                same time eliminate vices such as prejudice and stereotypes from
                the learning environment and, by extension, Liberian society.
              </li>
              <li><span>Excellence & Merit:</span> The KAICT values excellence in all its endeavors. Students and researchers receive awards based on their abilities and performance.</li>
              <li><span>Objectivity & Critical Thinking:</span> The KAICT values objectivity and critical thinking. The Institute shall ensure that policy research and conclusions are backed by rigorous analysis and not colored by any political, religious, or ethnic interests.</li>
              <li><span>Local Knowledge & Ownership:</span> While cross fertilization of knowledge in today’s globalizing world is inevitable and necessary the KAICT believes that durable solutions to local problems are those that have as their basis local knowledge and experience and are supported by external knowledge and resources.</li>
              <li><span>Innovation & Creativity:</span> In view of the fact that the KAICT represents an innovative and creative response to Liberia’s current needs, this approach will be part of the “modus vivendi” of the operation of the institution.</li>
              <li><span>Collaboration & Collegiality:</span> The KAICT values distinctiveness and interdependence of knowledge, expertise, and experience. The Institute shall therefore promote mutual respect and partnership in all learning activities.</li>
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

const OrganogramSection = () => {
  return (
    <section className="container mx-auto organogram">
      <div className="my-16 px-10">
        <span>Staff</span>
        <h3>Our Team</h3>
      </div>
    </section>
  );
};
const TemproaryStaff=()=>{
  
}

const AboutRoute = () => {
  const [staff, setstaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://kacit.twafwane.com/wp-json/wp/v2/staff")
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
      .then((posts) => {
        setstaff(posts);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Navbar />
      <AboutHero
        subtitle={"Know Us Better"}
        title={"About Us"}
        background={backgound}
      />
      <WhyUs /> 
      <ValuesContent />
      <Choices />     
      <Team loading={loading} staff={staff} />
      <KacitOverview/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutRoute;
