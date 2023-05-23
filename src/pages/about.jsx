import Choices from "../components/about/choices";
import AboutHero from "../components/about/hero";
import Mission from "../components/about/mission";
import Team from "../components/about/team";
import WhyUs from "../components/about/why-us";
import ContactUs from "../components/home/contact";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import backgound from "../hero/about.png";
import { useState, useEffect } from "react";
import { getData } from "../services";

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
      <div className="grid grid-cols-1 md:grid-cols-2 my-16 px-10">
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
        <div className="bg-[#25518C] p-10 text-[#FCFCFC]">
          <p>{tabs[active].desc}</p>
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
        console.log(posts);
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
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutRoute;
