import { useState, useEffect } from "react";
import AboutHero from "../components/about/hero";
import ProgramAppForm from "../components/outreachprograms/program-app-form";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import background from "../hero/master-banner.png";
import { useParams } from 'react-router-dom';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <table>
      <tbody>
        <tr onClick={() => setIsOpen(!isOpen)} className="flex items-center justfiy-between">
          <td >{title}  </td>
          <span className="text-lg text-white">{isOpen ? '-' : '+'}</span>
        </tr>
        <tr>
          {isOpen && <td>{content}</td>}

        </tr>

      </tbody>
    </table>
  );
}
const ProgramDetails = () => {
  const { id } = useParams();
  const label = "hrello"
  const [course, setcourses] = useState(null);
  const [loading, setloading] = useState(false);
  const curriculum = [
    {
      title: 'PSCT 500: Introduction to Peace and Conflict Studies*',
      content: 'This course provides an in-depth overview of the origins, nature, and causes of conflict; multi-cultural view on conflict and the emerging patterns and trends of conflicts in Africa. Theories of the origins of violence and its historical roots are considered with specific reference to West-Africa and Liberia in particular. Theoretical explanation of conflicts will be examined as they relate to the emergence of the conflicts in the recent past.'
    },
    {
      title: 'PSCT 502: Statistics for Decision-Making',
      content: 'This course describes the role, nature, and application of statistics in business and economics; Statistical concepts, Data presentation, Measurements of central tendency and variability, Measures of relationships and associations, Curve fitting and application of non-parametric statistics and multi variance analysis such as factor, path analysis, etc. will be discussed.'
    },
    {
      title: 'PSCT 511: Introduction to Peacebuilding and Development',
      content: 'The course provides a framework for the study of the principles of peace building and sustainable development. It examines peace building strategies with a specific focus on Africa. The course also analyses structures and/or institutions of Peace and Security and Development at local, national, regional and international levels respectively and their roles in building and sustaining peace. It also examines the link between Leadership, conflict transformation and Development. Particular attention is given to the development of a strategic framework for peace building, primarily from the perspectives of non-governmental organization (NGO), civil society and community-based practitioners.'
    },
    {
      title: 'PSCT 516: Leadership and Governance',
      content: 'The course examines theories and/or models of leadership with particular reference to the African context. It identifies key issues in Leadership and analyses the dynamics and impact of Leadership within and between the public and private sectors and civil society in relation to ethical, gender and equitable development principles. The course also identifies effective leadership styles in a variety of contexts including institutional, community, national, regional and global contexts. Last but not the least, the course critically examines the link between Leadership, Conflict Transformation and Peace building.'
    },
    {
      title: 'PSCT 523: Language Studies I*',
      content: 'This course lays emphasis on the development of skills in listening, reading, and speaking through the presentation of situation relevant to everyday life and oral exercises. '
    },
    {
      title: 'PSCT 524: Language Studies II',
      content: 'This course reinforces the skills acquired in listening, reading, and speaking of additional language; emphasis is placed on grammar, vocabulary and composition.To progress to Language Studies II, students must have successfully completed Language Studies I.'
    },
    {
      title: 'PSCT 535: Defense and Security',
      content: 'This course will provide the various definitions of peace with the view to understand the nature and function of political definition of peace with particular interest to defense and security. The global regional and national real politik and international relations perspective will be discussed with focus on the Mano River Basin region as well as ECOWAS'
    },
    {
      title: 'PSCT 538: Non-Violence, Trauma Healing and Reconciliation',
      content: 'This course will focus on the experience of the theory, faith base and practice of non-violent actions of achieving peace; grapples with issues of Justice and Conflict; exposure in a variety of creative alternatives to violence; examines how non-violence relates to the field of conflict resolution, the theory and practice of third – party intervention based on the African experience; exploration of the socio-psychological process of responding to deep personal loss, communal trauma, general suffering in settings of protracted violent conflicts and restorative justice.'
    },
    {
      title: 'PSCT 601: Research Methodology*',
      content: 'This course is an introductory course for basics of academic work and research; separated in four parts: Part one introduces different formats of academic work with a focus on the APA format. It discusses in detail how to structure academic work, how to cite and quote and the way of producing a bibliography as well as how to conduct web based research; Part two deals with different approaches to research and gives initial insights on quantitative, qualitative and mixed approaches; Part three acquaints students with critical data banks and indexes for peace and conflict studies and enables them to interpret such data;  Part four gives first insights on how to write academic and non-academic proposals and highlights differences and similarities. On the overall, this course consistently is linked to the Liberian context and informs about domestic research resources such as the TRC and its archives, resources provided by the Governance Commission or the National Archives.'
    },
    {
      title: "PSCT 615: Community Development",
      content: "This field-oriented course is an analysis of the structure and function of societies, including strains leading to change. It further examines the sources of conflict with emphasis on conflict transformation and discusses sustainable community development issues and trends. It highlights the importance of community empowerment as a basic element of community development processes and deals with participatory action research as one way of applying community development approaches “in the field” in a mixture of both rural and urban contexts."
    },
    {
      title: "PSCT 627: Ethnology, Gender and Human Rights",
      content: "This course analyzes and reflects on ethnicity, gender, and culture using as a background postmodern theory. Therefore, ethnicity, gender and culture are revealed as socially constructed and reflecting symbolic patterns of understanding which determine insider and outsider identities and power relations, display transformation and dynamic changes and unjust structures and activities within and beyond a society’s history. The course encourages the acquisition of knowledge of different ethnic groups in Liberia, gives an overview on theories of gender and discusses the construction and perception of gender roles in society in order to analyze their impact on war.  "
    },
    {
      title: "PSCT 631: International Relations in Peace and Conflict Studies",
      content: "This course provides an overview of key debates in the discipline of International Relations, focusing on topics of particular relevance for Peace and Conflict Studies. It introduces key theories on the international, from traditional approaches like Realism, Liberalism and Constructivism to more contemporary takes reflected in the Practice Turn. It challenges common approaches to Peace and Conflict Studies, notably those pertaining to the Neo-Liberal school, and offers Post-/De-Colonial perspectives on international relations. The course also introduces key themes in international relations, ranging from security to the economy, norms, identities and interests, to topics related to Post-Conflict Reconstruction, State building and Peacebuilding: Disarmament, Demobilization, Rehabilitation & Reintegration (DDRR), Security Sector Reform (SSR), economic reconstruction, Rule of Law, Human Rights, and Transitional Justice. Key actors on the international stage are introduced, including but not limited to organizations like the United Nations (UN), the World Bank (WB), the International Monetary Fund (IMF), the World Trade Organization (WTO), regional organizations like the African Union (AU), the Economic Community of West African States (ECOWAS), and a number of key state- (United States) and non-state actors (NGOs, CSOs, traders, citizens, criminals). The focus of this module will be on Africa in general and Liberia specifically, thereby challenging traditional approaches in IR, which are Eurocentric."
    },
    {
      title:"PSCT 712: M.A. Thesis",
      content:''
    }
  ]

  useEffect(() => {
    fetch(`https://kacit.twafwane.com/wp-json/wp/v2/teaching`)
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
        const mycourse = courses.find((c) => c.slug === id)
        setcourses(mycourse);
        setloading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Navbar />

      <AboutHero
        title={course?.acf.course_name ?? ""}
        subtitle={"Learning & Teaching"}
        background={course?.featured_image_url}
      />
      <main>
        <section className="program-info top">
          <div className="prog-info-container container mx-auto">
            {/* <div className="prog-btn">
              <button>Course Details</button>
              <button>Curriculum</button>
              <button>Entry Requirements</button>
              <button>Fees & Funding</button>
              <button>How to Apply</button>
            </div> */}
            <div className="prog-head px-5 md:px-10">
              <h2>Course Details</h2>
            </div>
            <div className="prog-txt px-5 md:px-10 ">
              {course && (
                <div dangerouslySetInnerHTML={{ __html: course.content.rendered }}>


                </div>
              )}
                {
              id == 'masters-program' && (
                <a href="http://kacit.twafwane.com/wp-content/uploads/2023/09/MA-Course-Brochure-1.pdf" target="blank"> <button className="btn-brochure">Download Brochure</button></a>
              )}
             

            </div>
            {
              id == 'masters-program' && (
                <>
                  <div className="prog-head px-5 md:px-10">
                    <h2>Curriculum</h2>
                  </div>
                  <div className="curriculum px-5 md:px-10 flex flex-col md:flex-row items-start justify-between gap-10">
                    <div className="left prog-txt">
                      <p>
                        By the end of the Master program, students will be able to:
                      </p>
                      <ul>
                        <li>Understand the dilemmas, tradeoffs and potentials of conflict prevention and peace building</li>
                        <li>Critically evaluate existing theories/conceptions of conflict and peace</li>
                        <li>Explore and understand the various concepts relating to conflict and peace studies </li>
                        <li>Understand the various meanings of conflict prevention, transformation and peace-building</li>
                        <li>Learn to identify and examine approaches to peace</li>
                        <li>Obtain tools for documenting and analyzing either ongoing or recent African conflicts that have been transformed by the employment of non-violent action.</li>
                        <li>Consider the various meanings of the concepts of peace and security and practices that may enhance them.</li>
                        <li>Develop their research skills, particularly their ability to analyze rather than simply describe and to be able to think and act creatively so as to transform conflict.</li>
                        <li>Produce academic paper(s) of publishable quality to contribute to the development of an African literature and discourse on the subject.</li>
                        <li>Make policy analyses and recommendations drawing on a sound interdisciplinary understanding of the dimensions of conflict prevention and peace-building.</li>
                        <li>Apply their learning and skills practically in policy, field or academic work.</li>
                        <li>Understand more deeply their own community and context, its dynamics and its specific requirements for building peace and preventing conflicts</li>
                        <li>Use information technology and media to obtain and disseminate information on these subjects.</li>
                      </ul>
                      <p>
                        The following courses are offered as part of the M.A. in Peace Studies and Conflict Transformation. Courses marked with an asterisk (*) are compulsory first semester/ year courses and a pass mark needs to be attained before the student can progress in the degree course.

                      </p>
                    </div>
                    <div className="right prog-txt">
                     
                      {curriculum.map((i, index) => (
                        <Accordion title={i.title} content={i.content} key={index} />
                      ))}


                    </div>
                  </div>
                </>
              )
            }

            <div className="prog-required px-5 md:px-10 ">
              <div className="prog-head">
                <h2>Entry Requirements</h2>
              </div>
              <div  dangerouslySetInnerHTML={{ __html: course?.acf.entry_requirements }}>
              </div>
            </div>
            <div className="prog-head mx-5 lg:mx-10">
              <h2 className="text-start">How To Apply</h2>
            </div>
            <div className="left prog-txt px-5 md:px-10 mb-10">
                <div className="right-text" dangerouslySetInnerHTML={{ __html: course?.acf.application_deadlines }}>

                </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProgramDetails;
