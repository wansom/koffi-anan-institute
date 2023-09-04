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
                    if (post.acf.collaborators && post.acf.collaborators.length > 0) {
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
        <div>
            <Navbar />
            <main>
                <AboutHero title={id} subtitle='Research Projects' background={research?.featured_image_url} />
                <section className="single-research">
                    <div className="single-research-container container mx-auto px-5">
                        <div className="single-research-head">
                            <h3>Overview</h3>
                        </div>
                        <div className="single-research-text">
                            <p>{research?.acf.overview}</p>
                        </div>

                        {
                            research?.acf.link === 'MOWIP-project' && (

                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                            <tr>
                                                <p className=" text-black font-bold my-4">Pre-deployment stage: including factors that affect force generation</p>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Eligible Pool</span> <br />
                                                        Are there enough women in national institutions?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The eligible pool issue area explores whether there are enough women in the AFL to meet the UN Uniformed Gender Parity Strategy targets for 2028: 15% of troops and 20% of military observers and staff to be women.
                                                </td>

                                            </tr>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Deployment Criteria </span> <br />
                                                        Do criteria match the skills needed in operation?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The deployment criteria issue area examines whether women can meet the requirements for deployment to the same extent as men.
                                                </td>

                                            </tr>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Deployment Selection</span> <br />
                                                        Does everyone have a fair chance to deploy?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The deployment selection issue area explores whether women are prevented or not from deploying through a lack of information, a lack of connections to influential decision makers and/or because their superiors decide that it is too dangerous for them to deploy.
                                                </td>

                                            </tr>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Household Constraints</span> <br />
                                                        Are there arrangements for families of deployed women?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The household constraints issue area explores the impact of having young children, elderly parents or other family obligations on women’s ability to deploy to peace operations, as compared to men. It also assesses whether there is social pressure towards women who might deploy.
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                            <tr>
                                                <p className=" text-black font-bold my-4">Deployment stage: including difficulties for women during operations</p>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Peace Operations Infrastructure</span> <br />
                                                        Is accommodation and equipment designed to meet women’s needs?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The peace operations infrastructure issue area assesses whether the lack of adequate equipment, infrastructure  and services prevent women from deploying to peace operations.
                                                </td>

                                            </tr>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Peace Operations Experiences</span> <br />
                                                        Do positive and negative experiences in operations affect women’s deployment decisions?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The peace operations experiences issue area assesses the impact of (positive and negative) experiences during deployment, including experiences of meaningful participation, on women’s decision to redeploy or not, and to encourage or discourage others from deploying.
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                            <tr>
                                                <p className=" text-black font-bold my-4">Post-deployment stage: including factors that affect redeployment</p>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Career Value</span> <br />
                                                        Do deployments advance women’s careers?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The career value issue area measures whether peace operations help the careers of military personnel. This, in turn, affects whether or not men and women are likely to deploy and redeploy. Women who have deployed may choose not to redeploy if it is not advantageous to their career prospects.
                                                </td>

                                            </tr>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Top-down Leadership</span> <br />
                                                        Do leaders at all levels support women’s deployment?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The top-down leadership issue area explores the impact of political will among those in influential positions (or lack thereof) on women’s deployment and meaningful participation in peace operations.
                                                </td>

                                            </tr>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Gender Roles</span> <br />
                                                        Do preconceived attitudes about women preclude their ability to deploy?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The gender roles issue area explores whether the prevalence of gender stereotypes and discriminatory attitudes influences the number of women deploying and their ability to meaningfully participate in peace operations. We assess this by looking at the degree to which women and men hold traditional roles and views about the roles that men and women play in society. We also assess the degree to which a gender protection norm exists in the institution. This means we assess whether men and women continue to feel that women must be protected from danger.
                                                </td>

                                            </tr>
                                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    <p> <span className="font-bold">Social Exclusion</span> <br />
                                                        Are women treated as equal members of the team?
                                                    </p>
                                                </th>
                                                <td class="px-6 py-4">
                                                    The social exclusion issue area explores whether in-group / out-group mentalities cause women to be marginalized, ostracized, denigrated, harassed or attacked thus preventing them from deploying or participating meaningfully in peace operations. It also explores the ways in which male group cohesion forms. We assess this by looking at the levels of harassment and violence in the institutions and sanctions against them, as well as healthy and unhealthy ways of creating cohesion.
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            )
                        }

                        <div className="single-research-head">
                            <h3>Project Goals</h3>
                        </div>
                        <div className="single-research-text">
                            {/* <p>Overall, the research project seeks to contribute to the development of evidence-based policies and programs aimed at promoting the well-being and active participation of Liberian youth in peacebuilding and development initiatives. By building the resilience of youth in Liberia, the project aims to support the country's ongoing efforts to rebuild and promote sustainable peace and development.</p> */}
                        </div>
                        
                        <div className="single-research-cards">
                            {projectgoals && (
                                projectgoals.map((project, index) => (
                                    <div className="single-research-card">
                                        <h1>{index + 1}.</h1>
                                        <p>{project}</p>
                                    </div>
                                ))
                            )}
                        </div>
                        {projectcomponents && (
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
                                                        <div className="method-height"></div>
                                                    </> : <>
                                                        <div className="method-height"></div>
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
                            research?.acf.link==='MOWIP-project'&&(
                                <div>
                                                                    </div>

                            )
                        }
                        {
                            projectoutcomes && (
                                <div className="single-outcome">
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
                                    <div className="team-content research flex gap-5 flex-wrap">
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