import { useState, useEffect } from "react";
import AboutHero from "../components/about/hero";
import AllResearch from "../components/research-projects/all-research";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/research.jpg";

const OverviewContent = () => {
  const tabs = [
    {
      title: "CONFLICT",
      desc: "Conflict has been an integral part of Liberia’s development since the arrival of freed slaves from the United States and the Congo basin, and even before that. Their re-settlement through the American Colonization Society on what became Liberian soil, created conflict with the indigenous communities residing on that land. This conflict has continued and endured over a century, partly facilitated through the continuous domination of the so-called Congo settlers over the indigenous population, and the deep fragmentation amongst the indigenous people. Following the military coup in 1980, the political consciousness that had developed since the 1970s erupted into open inter-ethnic conflict, culminating in 14 years of civil wars (1989-2003) that led to brain drain and the transfer of capital abroad and destroyed much of Liberia’s infrastructure and economy. Today, Liberia is still grappling with the consequences of these wars, which is reflected in old and new conflicts. These include governance conflicts, inter-ethnic tensions, land conflicts, and resource conflicts, amongst others. Globalization, strong ties with the United States and the intervention of development organizations and international partners since Liberia’s civil wars, have also contributed to conflicts between “traditional” and “modern” practices and viewpoints. At the Kofi Annan Institute, we view conflicts as complex phenomena that can lead to violence, destruction and insecurity on one hand, but also bring innovation and development on the other. ",
    },
    {
      title: "IN-SECURITY & VIOLENCE",
      desc: "Insecurity is part of the daily lives of the majority of the Liberian population, which lives in extreme poverty. Concerning are very high and growing levels of undernourishment (38.3 percent) and alarming but declining child stunting rates (29.8 percent) in Liberia (Global Hunger Index 2022). People’s struggle for survival and livelihood concerns have contributed to an increase in crime. Sexual harassment, exploitation, rape, including of minors, abductions and forceful initiations into secret societies, ritualistic killings, murder, armed robbery, burglary, illicit mining, money laundering, mobile money theft, the illegal exploitation of natural resources, the deliberate violation of the rule of law, the disparate application of justice, etc. are widespread. Crime is also becoming increasingly organized and often escalates into violence. Many Liberians have been exposed to or subjected to violence in their lives. Violence is harming people physically and mentally, but it also destroyed the country’s buildings and infrastructure and disrupted economic flows and social networks. Violence often leads to calls for the intervention of state security forces, who are legitimized to use physical force in pursuit of national security. In so doing, they often threaten people’s security, and enhance the populations insecurity. National security concerns thus often infringe on human security concerns.At the Kofi Annan Institute, we take a wholistic perspective on security. We place human security at the core and embed it in broader considerations around national security. We study both the structural constraints that shape people’s lives, as well as people’s personal experiences and perceptions of in-security and violence.",
    },
    {
      title: "PEACE",
      desc: "Liberia has been at the center of national and international peace-making efforts, which culminated in the end of the country’s civil wars in 2003, with support from the United Nations Mission to Liberia (UNMIL, 2003-18). Furthermore, Liberia has contributed personnel to UN peacekeeping missions in Congo (1960s), Mali (ongoing), Abyei and South Sudan (ongoing).The UNMIL peacekeeping missions was paralleled by efforts at coming to terms with the country’s violent past. A Truth and Reconciliation Commission (TRC, 2005-09) was set up to help with people’s healing. However, it was shrouded in controversy. While it has led to some truth telling, it measures poorly when it comes to reconciliation. The Liberian government laid out its pathway to reconciliation in A Strategic Roadmap for National Healing, Peacebuilding, and Reconciliation (2013-30), which involves transitional justice mechanisms that aim to account for the past, manage the present and plan for the future. Yet, little progress has been made towards putting this Roadmap into practice.Traditional conflict resolution mechanisms are widely touted and supported through international efforts. Key among them has been the Palava hut process, which was realized as part of the recommendations of the TRC in 2013. Yet, peace remains fragile in Liberia, partly because of incomplete Disarmament, Demobilization, Rehabilitation and Reintegration (2003-09) and due to the failures of the TRC process. At the Kofi Annan Institute we do not understand peace simply as the absence of violence, but as a broader political, economic, (psycho-)social process that fosters cohesion, inclusion, broader participation and equal opportunities for all, where meritocracy and accountability are standards for governance, leadership and development.",
    },
    {
      title:"DEVELOPMENT",
      desc:"Until the 1970s, Liberia's economy was one of the fastest-growing economies in Sub-Saharan Africa. Liberia is rich in natural resources, including minerals like diamonds, iron ore and gold, as well as water and forests. The country also has a climate favorable to agriculture, and many people rely on subsistence farming. Yet, with the coup d'état in 1980 and fourteen years of civil wars this economic situation changed. Much of Liberia's economy and infrastructure were destroyed, people migrated from rural areas to urban spaces and left their agricultural activities, while many educated and skilled people left the country. Post-war reconstruction efforts by the Liberian government and its international partners have been extensive, including billions in foreign aid and development assistance that were geared towards infrastructural developments and the agricultural sector, in particular. However, Liberia’s post-war recovery and development have been slow and largely unsustainable, with limited benefits for the country’s poor. Reliance on external funding, skills and knowledge is widespread and high.There is a need to shift towards community development in Liberia. Community development is locally driven and focuses on the resources available among Liberian citizens, including both human and natural resources. It is a process where people launch their own initiatives to address their problems and concerns and jointly implement solutions. At the Kofi Annan Institute we understand development not purely in economic terms, but as a process that enhances people’s skills to contribute to the best of their abilities to the country’s social, economic, and political development. It is a process in which people take ownership and work towards strengthening people, communities and the country."
    },
    {
      title:"GENDER",
      desc:"Since the end of Liberia’s civil wars, reporting on sexual and gender-based violence has increase significantly. This includes rape, sexual assault, forced prostitution, early marriage, wife inheritance and forced servitude, amongst others. Teenage pregnancy is very high. Many pregnant girls and women and their children are abandoned by the children’s fathers, leaving them and their families to fend for themselves. This places a high burden on the families of girl children.Many girls and women are discriminated against and marginalized. This begins early in the life of children, where families will often prefer to support the education of sons over draughts when resources are limited, resulting in early school drop outs of many girls. It continues in higher education, where men often dominate discussions and occupy senior academic positions. Once girls and women leave the educational setting, this discrimination and marginalization continues. Many girls and women are “forced” into roles and professions due to the lack of core skills, because of limited educational qualifications and/or societal norms and pressures. Gender equality does not receive widespread support. According to a study by Symeou & Dasse (2021), only about one third of Liberians are highly supportive of gender equality, whereas two thirds oppose it or only endorse certain aspects of gender equality, especially among men. This is because people often misunderstand the meaning of this term and feel that international norms are imposed on them by donors and international partners. At the Kofi Annan Institute we highlight the need to understand gender in the Liberian context and emphasize the benefits of a locally-led process towards gender equality. This process has to involve working with both men and women to change gender perceptions, for an exclusive focus on girls and women will hardly be able to change the lack of space provided to females in the public space. Through the Mary Antoinette Brown Sherman Think Tank, KAICT champions the participation of girls and women in all aspects of public life, especially in leadership and governance in Liberia."
    }
  ];
  const [active, setactvive] = useState(0);
  return (
    <div className="container mx-auto values-section">
      <h3 className="research-header">RESEARCH AREAS</h3>
      <div className="flex flex-col md:flex-row my-16 px-1 md:px-10">
        <div className="space-y-4 basis-1/3">
          {tabs.map((tab, index) => (
            <div
              className={
                index === active
                  ? "tab pl-10 py-3 bg-[#25518C] text-[#FCFCFC] "
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
        <div className="bg-[#25518C] p-10 text-[#FCFCFC] desc basis-2/3">
          { <p>{tabs[active].desc}</p>}
        </div>
      </div>
    </div>
  );
};

const ResearchProjects = () => {
  const [research, setResearch] = useState([]);
  const [loading, setloading] = useState(false);
  const [ongoing, setongoing] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [consultancy, setconsultancy] = useState([]);

  const fetchCompleted = () => {
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
        let completed = courses.filter(
          (course) => course.acf.project_status === "Completed"
        );
        let ongoing = courses.filter(
          (course) => course.acf.project_status === "Ongoing"
        );
        let consultancy = courses.filter(
          (course) => course.acf.project_status === "consultancy"
        );
        console.log(completed,ongoing,consultancy)
        setcompleted(completed);
        setongoing(ongoing);
        setconsultancy(consultancy);
        setloading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCompleted();
  }, []);
  return (
    <div>
      <Navbar />
      <main>
        <AboutHero
          title={"Research Projects"}
          subtitle="Advancing Peace and Stability through Innovative Research"
          background={background}
        />
        <div className="container mx-auto">
          <p className="py-6 text-lg mx-5">
            At KAICT we pride ourselves with being the main research institute
            on peace studies and conflict transformation in Liberia. KAICT’s
            research – on peace, conflict, security, development and gender –
            focuses on key issues affecting Liberia today. Our research is
            locally driven and implemented in collaboration with national and
            international partners. It adopts interdisciplinary approaches, is
            based on fieldwork and practice-based. It provides local knowledge
            and understanding of socio-political, socio-economic and
            socio-cultural dynamics in Liberia and offers local solutions.{" "}
          </p>
        </div>
        <OverviewContent />
        <main>
          <section className="research-content">
            <div className="research-container container">
              <div className="research-item">
                <div className="research-head">
                  <h1>Ongoing Projects</h1>
                </div>
                {ongoing.map((i) => (
                  <div
                    className="research-information bg-cover bg-center"
                    style={{ backgroundImage: `url(${i.featured_image_url})` }}
                  >
                    <div className="research-status px-3">
                      <p>{i?.acf.project_status} Project</p>
                    </div>

                    <div className="research-card">
                      <h3>{i.acf.project_title}</h3>
                      <p>{i?.acf.overview?.slice(0, 280)}...</p>
                      <a
                        href={`/researchProject/${i.acf.link}`}
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
                  <h1>Completed Projects</h1>
                </div>
                {completed.map((i) => (
                  <div
                    className="research-information"
                    style={{ backgroundImage: `url(${i.featured_image_url})` }}
                  >
                    <div className="research-status px-3">
                      <p>{i.acf.project_status} Project</p>
                    </div>
                    <div className="research-card">
                      <h3>{i.acf.project_title}</h3>
                      <p>{i?.acf.overview?.slice(0, 280)}...</p>
                      <a
                        href={`/researchProject/${i.acf.link}`}
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
                  <div
                    className="research-information "
                    style={{ backgroundImage: `url(${i.featured_image_url})` }}
                  >
                    <div className="research-status px-3">
                      <p className=" capitalize whitespace-nowrap">
                        {i.acf.project_status} Project
                      </p>
                    </div>
                    <div className="research-card">
                      <h3>{i.acf.project_title}</h3>
                      <p>{i?.acf.overview?.slice(0, 280)}...</p>
                      <a
                        href={`/researchProject/${i.acf.link}`}
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
