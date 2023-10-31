import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/research-program.png'
import { useState, useEffect } from "react";
import { getData } from "../services";
import EventsCard from "../components/events/events-card";
import { useParams } from 'react-router-dom';
import DOMParser from 'dom-parser';

const SingleResearchProject = () => {
    const [events, setEvents] = useState([]);
    const [activetab, setactivetab] = useState(0);
    const [research, setResearch] = useState(null)
    const [projectgoals, setprojectgoals] = useState([])
    const [projectcomponents, setprojectcomponents] = useState([])
    const [projectoutcomes, setprojectoutcomes] = useState([])
    const { id } = useParams();
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const htmlToListItems = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const listItems = doc.getElementsByTagName('li');

        return Array.from(listItems).map(li => li.textContent);
    };
    async function fetchData() {
        fetch("https://kacit.twafwane.com/wp-json/wp/v2/research")
            .then((response) => response.json())
            .then((posts) => {

                const mediaPromises = posts.map((post) => {
                    return fetch(`https://kacit.twafwane.com/wp-json/wp/v2/media/${post.featured_media}`)
                        .then((response) => response.json())
                        .then((media) => {
                            post.featured_image_url = media.source_url;
                            return post;
                        });
                });
                return Promise.all(mediaPromises);
            })
            .then((postsWithMedia) => {
                const collaboratorPromises = postsWithMedia.map((post) => {
                    if (post?.acf.collaborators && post.acf.collaborators.length > 0) {
                        return Promise.all(
                            post.acf.collaborators.map((collabId) => {
                                return fetch(`https://kacit.twafwane.com/wp-json/wp/v2/collaborators/${collabId}`)
                                    .then((response) => response.json())
                                    .then((collaboratorData) => {
                                        if (collaboratorData.acf?.logo) {
                                            return fetch(`https://kacit.twafwane.com/wp-json/wp/v2/media/${collaboratorData.acf.logo}`)
                                                .then((response) => response.json())
                                                .then((media) => {
                                                    collaboratorData.featured_image_url = media.source_url;
                                                    return collaboratorData;
                                                });
                                        } else {
                                            return collaboratorData;
                                        }
                                    });
                            })
                        ).then((collaboratorsForPost) => {
                            post.collaborators = collaboratorsForPost;
                            return post;
                        });
                    } else {
                        return Promise.resolve(post);
                    }
                });

                return Promise.all(collaboratorPromises);
            })
            .then((postsWithCollaborators) => {

                const currentIndex = postsWithCollaborators.find((item) => item.acf.link === id);

                console.log(currentIndex)
                const postContent = currentIndex.acf.project_; // Adjust this path as necessary based on the WordPress API response structure
                const parsedItems = htmlToListItems(postContent);
                const parsedComponents = htmlToListItems(currentIndex.acf.project_components)
                const parsedoutcomes = htmlToListItems(currentIndex.acf.project_outcomes)

                setprojectgoals(parsedItems)
                setprojectcomponents(parsedComponents)
                setprojectoutcomes(parsedoutcomes)
                setResearch(currentIndex);
            })
            .catch((error) => console.error(error));
    }




    useEffect(() => {
        getData("https://kacit.twafwane.com/wp-json/tribe/events/v1/events").then(
            (data) => {
                setEvents(data.events);
            }
        );
        fetchData();
    }, []);
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <main>
                <AboutHero title={research?.acf.project_title} subtitle='Research Projects' background={research?.featured_image_url} />
                <section className="single-research">
                    <div className="single-research-container container mx-auto px-5 md:px-10">
                        <div className="single-research-head">
                            <h3>Overview</h3>
                        </div>
                        <div className="single-research-text">
                            <p>{research?.acf.overview}</p>
                        </div>
                        {
                            research?.acf.link === 'MOWIP-project' && (
                                <div className="flex flex-col lg:flex-row">
                                    <img src="/images/mowip-1.jpg" alt="" className="w-full h-screen object-contain" />
                                    <img src="/images/mowip-2.jpg" alt="" className="w-full h-screen object-contain" />

                                </div>
                            )
                        }


                        {projectgoals.length > 0 && (
                            <>
                                <div className="single-research-head">
                                    {research?.acf.link !== 'Conflict-Mediation-consultancy' && (
                                        <h3 className="mb-4">Project Goals</h3>
                                    )}
                                    {research?.acf.link === 'Conflict-Mediation-consultancy' && (
                                        <h3>Project Milestones</h3>
                                    )}
                                </div>


                                <div className="single-research-cards flex items-start flex-col md:flex-row">

                                    {projectgoals.map((project, index) => (
                                        <div className="single-research-card">
                                            <h1>{index + 1}.</h1>
                                            <p>{project}</p>
                                        </div>
                                    ))}

                                </div>
                            </>


                        )}
                        {
                            research?.acf.link === 'MOWIP-project' && (
                                <div>
                                    <div className="single-research-head">
                                        <h3>Research Methodology</h3>
                                    </div>
                                    <div className="single-research-text">
                                        <p>The MOWIP methodology is a unique tool to assess and improve women’s meaningful participation in peace operations. It provides a systematic and comprehensive framework for identifying both a security institution’s existing good practices and possible improvements in each of ten issue areas identified as central to women’s meaningful participation. Many relevant factors are not limited, however, to the specific context of women’s participation in UN deployments. Rather, they reflect how women and men are treated in the security institution more broadly.
                                            This project uses three data collection tools: a fact-finding form (FFF), key decision-maker interviews and a survey. The fact-finding form contains approximately 200 questions designed to collect qualitative and quantitative data from official sources about deployment to UN peace operations from the country and institution being assessed. The
                                            The Kofi Annan Institute for Conflict Transformation team undertook the data collection for this project from October 14, 2021 through April 25, 2022. In this process, KAICT:
                                        </p>
                                        <ul className=" list-inside list-disc">
                                            <li>Completed the fact-finding form</li>
                                            <li>Interviewed 28 key decision-makers from within the institution as well as relevant </li>
                                            <li>Conducted a survey with 600 members from all batches of the AFL, including 61% of the women in the forces</li>

                                        </ul>
                                    </div>

                                </div>
                            )
                        }
                        {projectcomponents.length > 0 && research?.acf.link !== 'MOWIP-project' && (
                            <>
                                <div className="single-research-head">
                                    <h3>Project Components</h3>
                                </div>
                                <div className="single-research-text">
                                    <p>Overall, the mixed-methods approach will allow for a comprehensive understanding of the experiences and perceptions of Liberian youth in relation to conflict and violence, as well as their resilience and participation in peacebuilding and development initiatives. The findings of the research project will inform the development of evidence-based policies and programs aimed at promoting the well-being and active participation of Liberian youth in peacebuilding and development initiatives.</p>
                                </div>
                                <div className="method-cards">

                                    {projectcomponents && (
                                        projectcomponents.map((component, index) => (
                                            <div className="methods" key={index}>
                                                {index % 2 === 0 ?
                                                    <>
                                                        <div className="method-card">
                                                            <p>{component}</p>
                                                        </div>
                                                        <div className="method-height hidden md:block"></div>
                                                    </> : <>
                                                        <div className="method-height hidden md:block"></div>
                                                        <div className="method-card">
                                                            {/* <h4>Literature Review</h4> */}
                                                            <p>{component}</p>
                                                        </div>
                                                    </>

                                                }


                                            </div>
                                        ))
                                    )}
                                </div>
                            </>
                        )}

                        {
                            research?.acf.link === 'MOWIP-project' && (
                                <div>
                                </div>

                            )
                        }
                        {
                            research?.acf.link === 'MOWIP-project' && (
                                <> <div className="single-research-head my-3">
                                    <h3 className="my-4">Project Outcomes</h3>
                                    <p>Effective participation is not just about the number or proportion of women deployed, but also about ensuring first, that women’s needs are met when participating in the institution and on operations; second, that women have access to the same opportunities, roles, and resources as men; and third, that women’s skills and competencies match their responsibilities and the expectations they face. As such, addressing the barriers identified will require an integrated and holistic approach, incorporating four complementary types of intervention: policies, training and professional development, practices, and organizational culture.
                                        This study shows that the three main barriers to women’s meaningful participation in peace operations are Issue Area 3 deployment selection, Issue Area 5 peace operation infrastructure and Issue Area 10 social exclusion.
                                    </p>

                                </div>

                                    <img src="/images/mowip-table.jpg" alt="" />
                                </>
                            )
                        }
                        {
                            projectoutcomes.length > 0 && research?.acf.link !== 'MOWIP-project' &&
                            (
                                <div className="single-outcome flex flex-col-reverse md:flex-row">
                                    <div className="left">
                                        <div className="single-research-head">
                                            <h3>Project Outcomes</h3>
                                        </div>
                                        <div className="single-research-text listing">
                                            <p>The project outcomes will contribute to the promotion of sustainable peace and development in Liberia, by addressing the challenges faced by Liberian youth and promoting their active participation in building a better future for themselves and their communities.</p>
                                            <div className="outcome-listings">
                                                {projectoutcomes && (
                                                    projectoutcomes.map((outcome, index) => (
                                                        <div className="single-listing" key={index}>
                                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_772_640" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                                </mask>
                                                                <g mask="url(#mask0_772_640)">
                                                                    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#DE4404" />
                                                                </g>
                                                            </svg>
                                                            </span>
                                                            <p className="listing">{outcome}</p>
                                                        </div>
                                                    )))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src="/images/research-bottom.jpeg" alt="research projects" />
                                    </div>
                                </div>
                            )
                        }

                        {research?.collaborators && (
                            <>
                                <div className="single-research-head">
                                    <h3>Collaborators</h3>
                                </div>
                                {
                                    research.acf.link === 'MOWIP-project' && (
                                        <p className="px-5  my-2"> The MOWIP methodology was implemented with the Armed Forces of Liberia with support from UN Women, KAICT, the Gender and Security Sector Lab (GSS Lab) and the DCAF Helpdesk, and funded by the Elsie Initiative Fund.
                                        </p>
                                    )
                                }

                                <div className="team-container container">
                                    <div className="team-content research grid grid-cols-1 md:grid-cols-3">
                                        {research.collaborators && (
                                            <>
                                                {research?.collaborators.map((i) => (
                                                    <div className="member">
                                                        <img src={i.featured_image_url} alt="Kofi Annan  Annan Institute for Conflict Transformation Team Member" className=" object-contain" />
                                                        <div className="member-info">
                                                            <span>{i.acf.name}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        )}

                                    </div>
                                </div>
                            </>
                        )}

                        <div className="single-research-head">
                            <h3>Events</h3>
                        </div>
                        <div className="black-events events">
                            {events.map((i) => (
                                <EventsCard event={i}></EventsCard>
                            ))}

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default SingleResearchProject