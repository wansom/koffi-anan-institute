import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/research-program.png'
import { useState, useEffect } from "react";
import { getData } from "../services";
import EventsCard from "../components/events/events-card";
import { useParams } from 'react-router-dom';

const SingleResearchProject = () => {
    const [events, setEvents] = useState([]);
    const [activetab, setactivetab] = useState(0);
    const [research, setResearch] = useState(null)
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

                const currentIndex = postsWithCollaborators.find((item) => item.acf.project_title === id);
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
                <AboutHero title={id} subtitle='Research Projects' background={background} />
                <section className="single-research">
                    <div className="single-research-container container mx-auto px-5">
                        <div className="single-research-head">
                            <h3>Overview</h3>
                        </div>
                        <div className="single-research-text">
                            <p>{research?.acf.overview}</p>
                        </div>
                        {research?.collaborators && (
                            <>
                                <div className="single-research-head">
                                    <h3>Collaborators</h3>
                                </div>
                                <div className="team-container container">
                                    <div className="team-content research flex">
                                        {research?.collaborators.map((i)=>(
                                             <div className="member">
                                             <img src={i.featured_image_url} alt="Kofi Annan  Annan Institute for Conflict Transformation Team Member" />
                                             <div className="member-info">
                                                 <span>{i.acf.name}</span>
                                                
                                             </div>
                                         </div>
                                        ))}
                                       
                                    </div>
                                </div>
                            </>
                        )}


                        <div className="single-research-head">
                            <h3>Project Goals</h3>
                        </div>
                        <div className="single-research-text">
                            <p>Overall, the research project seeks to contribute to the development of evidence-based policies and programs aimed at promoting the well-being and active participation of Liberian youth in peacebuilding and development initiatives. By building the resilience of youth in Liberia, the project aims to support the country's ongoing efforts to rebuild and promote sustainable peace and development.</p>
                        </div>
                        <div className="single-research-cards">
                            <div className="single-research-card">
                                <h1>1.</h1>
                                <p>Examine the impact of conflict and violence on the lives of Liberian youth, including their physical and emotional well-being, social relationships, and access to education and employment opportunities.</p>
                            </div>
                            <div className="single-research-card">
                                <h1>2.</h1>
                                <p>Identify the factors that contribute to the resilience of Liberian youth in the face of conflict and violence, including individual coping strategies, community support systems, and access to resources and services.</p>
                            </div>
                            <div className="single-research-card">
                                <h1>3.</h1>
                                <p>Develop recommendations for policymakers, practitioners, and community leaders on strategies for building collaborative resilience among Liberian youth and promoting their participation in peacebuilding and development initiatives.</p>
                            </div>
                        </div>
                        <div className="single-research-head">
                            <h3>Research Meethods</h3>
                        </div>
                        <div className="single-research-text">
                            <p>Overall, the mixed-methods approach will allow for a comprehensive understanding of the experiences and perceptions of Liberian youth in relation to conflict and violence, as well as their resilience and participation in peacebuilding and development initiatives. The findings of the research project will inform the development of evidence-based policies and programs aimed at promoting the well-being and active participation of Liberian youth in peacebuilding and development initiatives.</p>
                        </div>
                        <div className="method-cards">
                            <div className="methods">
                                <div className="method-card">
                                    <h4>Literature Review</h4>
                                    <p>A comprehensive review of existing literature on the impact of conflict and violence on youth in Liberia, as well as the factors that contribute to their resilience and participation in peacebuilding and development initiatives.</p>
                                </div>
                                <div className="method-height"></div>
                            </div>
                            <div className="methods">
                                <div className="method-height"></div>
                                <div className="method-card">
                                    <h4>Literature Review</h4>
                                    <p>A comprehensive review of existing literature on the impact of conflict and violence on youth in Liberia, as well as the factors that contribute to their resilience and participation in peacebuilding and development initiatives.</p>
                                </div>
                            </div>
                            <div className="methods">
                                <div className="method-card">
                                    <h4>Literature Review</h4>
                                    <p>A comprehensive review of existing literature on the impact of conflict and violence on youth in Liberia, as well as the factors that contribute to their resilience and participation in peacebuilding and development initiatives.</p>
                                </div>
                                <div className="method-height"></div>
                            </div>
                            <div className="methods">
                                <div className="method-height"></div>
                                <div className="method-card">
                                    <h4>Literature Review</h4>
                                    <p>A comprehensive review of existing literature on the impact of conflict and violence on youth in Liberia, as well as the factors that contribute to their resilience and participation in peacebuilding and development initiatives.</p>
                                </div>
                            </div>
                            <div className="methods">
                                <div className="method-card">
                                    <h4>Literature Review</h4>
                                    <p>A comprehensive review of existing literature on the impact of conflict and violence on youth in Liberia, as well as the factors that contribute to their resilience and participation in peacebuilding and development initiatives.</p>
                                </div>
                                <div className="method-height"></div>
                            </div>
                        </div>
                        <div className="single-outcome">
                            <div className="left">
                                <div className="single-research-head">
                                    <h3>Project Outcomes</h3>
                                </div>
                                <div className="single-research-text listing">
                                    <p>The project outcomes will contribute to the promotion of sustainable peace and development in Liberia, by addressing the challenges faced by Liberian youth and promoting their active participation in building a better future for themselves and their communities.</p>
                                    <div className="outcome-listings">
                                        <div className="single-listing">
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_772_640" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_772_640)">
                                                    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#DE4404" />
                                                </g>
                                            </svg>
                                            </span>
                                            <p className="listing">Identify the challenges faced by Liberian youth in relation to conflict and violence, as well as their coping strategies and community support systems.</p>
                                        </div>
                                        <div className="single-listing">
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_772_640" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_772_640)">
                                                    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#DE4404" />
                                                </g>
                                            </svg>
                                            </span>
                                            <p className="listing">Identify the factors that contribute to the resilience of Liberian youth and their participation in peacebuilding and development initiatives.</p>
                                        </div>
                                        <div className="single-listing">
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_772_640" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_772_640)">
                                                    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#DE4404" />
                                                </g>
                                            </svg>
                                            </span>
                                            <p className="listing">Provide evidence-based recommendations for policymakers and practitioners on strategies for building the resilience of Liberian youth and promoting their active participation in peacebuilding and development initiatives.</p>
                                        </div>
                                        <div className="single-listing">
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_772_640" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_772_640)">
                                                    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#DE4404" />
                                                </g>
                                            </svg>
                                            </span>
                                            <p className="listing">Increase awareness and understanding of the experiences and perspectives of Liberian youth in relation to conflict and violence, as well as the importance of their participation in peacebuilding and development initiatives.</p>
                                        </div>
                                        <div className="single-listing">
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_772_640" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                    <rect width="24" height="24" fill="#D9D9D9" />
                                                </mask>
                                                <g mask="url(#mask0_772_640)">
                                                    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="#DE4404" />
                                                </g>
                                            </svg>
                                            </span>
                                            <p className="listing">Establish partnerships and collaborations with stakeholders in Liberia, including policymakers, practitioners, and community leaders, to implement evidence-based policies and programs that promote the well-being and active participation of Liberian youth in peacebuilding and development initiatives.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="/images/outreach-program/program-outcome.png" alt="" />
                            </div>
                        </div>
                        {/* <div className="single-research-head">
                    <h3>Publications</h3>
                </div> */}
                        {/* <div className="publications-research">
                    <div className="content-info">
                        <div className="year">
                            2016
                        </div>
                        <div className="top flex items-center gap-2">
                            <span>by</span>
                            <span>Bendon Murgor</span>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                </svg>
                            </span>
                            <span className="no-margin">Theses</span>
                            <span className="no-margin">,</span>
                            <span>Journal</span>
                        </div>
                        <div className="bottom">
                            <h2>Administrative science quarterly.</h2>
                            <div className="more-info">
                                <span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_600_20" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="15" height="15">
                                            <rect width="15" height="15" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_600_20)">
                                            <path
                                                d="M4.28125 9.375C4.60417 9.375 4.89333 9.28125 5.14875 9.09375C5.40375 8.90625 5.58333 8.66146 5.6875 8.35938L5.92188 7.64063C6.08854 7.14063 6.04688 6.67958 5.79688 6.2575C5.54687 5.83583 5.1875 5.625 4.71875 5.625H2.51562L2.8125 8.07812C2.86458 8.44271 3.02854 8.75 3.30438 9C3.58063 9.25 3.90625 9.375 4.28125 9.375ZM10.7188 9.375C11.0938 9.375 11.4192 9.25 11.695 9C11.9712 8.75 12.1354 8.44271 12.1875 8.07812L12.4844 5.625H10.2969C9.82812 5.625 9.46875 5.83854 9.21875 6.26562C8.96875 6.69271 8.92708 7.15625 9.09375 7.65625L9.3125 8.35938C9.41667 8.66146 9.59625 8.90625 9.85125 9.09375C10.1067 9.28125 10.3958 9.375 10.7188 9.375ZM4.28125 10.625C3.59375 10.625 2.99229 10.3983 2.47688 9.945C1.96104 9.49208 1.66146 8.92188 1.57813 8.23438L1.25 5.625H0.625V4.375H4.71875C5.17708 4.375 5.59625 4.48688 5.97625 4.71063C6.35667 4.93479 6.65625 5.23958 6.875 5.625H8.14062C8.35937 5.23958 8.65896 4.93479 9.03938 4.71063C9.41938 4.48688 9.83854 4.375 10.2969 4.375H14.375V5.625H13.75L13.4219 8.23438C13.3385 8.92188 13.0392 9.49208 12.5238 9.945C12.0079 10.3983 11.4062 10.625 10.7188 10.625C10.125 10.625 9.59125 10.4558 9.1175 10.1175C8.64333 9.77875 8.3125 9.32812 8.125 8.76562L7.89062 8.0625C7.86979 7.98958 7.84896 7.91396 7.82812 7.83562C7.80729 7.75771 7.78646 7.64583 7.76562 7.5H7.23438C7.21354 7.625 7.19271 7.72646 7.17188 7.80438C7.15104 7.88271 7.13021 7.95833 7.10938 8.03125L6.875 8.75C6.6875 9.3125 6.35687 9.76562 5.88313 10.1094C5.40896 10.4531 4.875 10.625 4.28125 10.625Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                </span>
                                <span>2,019 views</span>
                                <span>
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                </span>
                                <span>(1,452)</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-info">
                        <div className="year">
                            2016
                        </div>
                        <div className="top flex items-center gap-2">
                            <span>by</span>
                            <span>Bendon Murgor</span>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                </svg>
                            </span>
                            <span className="no-margin">Theses</span>
                            <span className="no-margin">,</span>
                            <span>Journal</span>
                        </div>
                        <div className="bottom">
                            <h2>Administrative science quarterly.</h2>
                            <div className="more-info">
                                <span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_600_20" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="15" height="15">
                                            <rect width="15" height="15" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_600_20)">
                                            <path
                                                d="M4.28125 9.375C4.60417 9.375 4.89333 9.28125 5.14875 9.09375C5.40375 8.90625 5.58333 8.66146 5.6875 8.35938L5.92188 7.64063C6.08854 7.14063 6.04688 6.67958 5.79688 6.2575C5.54687 5.83583 5.1875 5.625 4.71875 5.625H2.51562L2.8125 8.07812C2.86458 8.44271 3.02854 8.75 3.30438 9C3.58063 9.25 3.90625 9.375 4.28125 9.375ZM10.7188 9.375C11.0938 9.375 11.4192 9.25 11.695 9C11.9712 8.75 12.1354 8.44271 12.1875 8.07812L12.4844 5.625H10.2969C9.82812 5.625 9.46875 5.83854 9.21875 6.26562C8.96875 6.69271 8.92708 7.15625 9.09375 7.65625L9.3125 8.35938C9.41667 8.66146 9.59625 8.90625 9.85125 9.09375C10.1067 9.28125 10.3958 9.375 10.7188 9.375ZM4.28125 10.625C3.59375 10.625 2.99229 10.3983 2.47688 9.945C1.96104 9.49208 1.66146 8.92188 1.57813 8.23438L1.25 5.625H0.625V4.375H4.71875C5.17708 4.375 5.59625 4.48688 5.97625 4.71063C6.35667 4.93479 6.65625 5.23958 6.875 5.625H8.14062C8.35937 5.23958 8.65896 4.93479 9.03938 4.71063C9.41938 4.48688 9.83854 4.375 10.2969 4.375H14.375V5.625H13.75L13.4219 8.23438C13.3385 8.92188 13.0392 9.49208 12.5238 9.945C12.0079 10.3983 11.4062 10.625 10.7188 10.625C10.125 10.625 9.59125 10.4558 9.1175 10.1175C8.64333 9.77875 8.3125 9.32812 8.125 8.76562L7.89062 8.0625C7.86979 7.98958 7.84896 7.91396 7.82812 7.83562C7.80729 7.75771 7.78646 7.64583 7.76562 7.5H7.23438C7.21354 7.625 7.19271 7.72646 7.17188 7.80438C7.15104 7.88271 7.13021 7.95833 7.10938 8.03125L6.875 8.75C6.6875 9.3125 6.35687 9.76562 5.88313 10.1094C5.40896 10.4531 4.875 10.625 4.28125 10.625Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                </span>
                                <span>2,019 views</span>
                                <span>
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                </span>
                                <span>(1,452)</span>
                            </div>
                        </div>
                    </div>
                    <div className="content-info">
                        <div className="year">
                            2016
                        </div>
                        <div className="top flex items-center gap-2">
                            <span>by</span>
                            <span>Bendon Murgor</span>
                            <span>
                                <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                </svg>
                            </span>
                            <span className="no-margin">Theses</span>
                            <span className="no-margin">,</span>
                            <span>Journal</span>
                        </div>
                        <div className="bottom">
                            <h2>Administrative science quarterly.</h2>
                            <div className="more-info">
                                <span>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_600_20" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse"
                                            x="0" y="0" width="15" height="15">
                                            <rect width="15" height="15" fill="#D9D9D9" />
                                        </mask>
                                        <g mask="url(#mask0_600_20)">
                                            <path
                                                d="M4.28125 9.375C4.60417 9.375 4.89333 9.28125 5.14875 9.09375C5.40375 8.90625 5.58333 8.66146 5.6875 8.35938L5.92188 7.64063C6.08854 7.14063 6.04688 6.67958 5.79688 6.2575C5.54687 5.83583 5.1875 5.625 4.71875 5.625H2.51562L2.8125 8.07812C2.86458 8.44271 3.02854 8.75 3.30438 9C3.58063 9.25 3.90625 9.375 4.28125 9.375ZM10.7188 9.375C11.0938 9.375 11.4192 9.25 11.695 9C11.9712 8.75 12.1354 8.44271 12.1875 8.07812L12.4844 5.625H10.2969C9.82812 5.625 9.46875 5.83854 9.21875 6.26562C8.96875 6.69271 8.92708 7.15625 9.09375 7.65625L9.3125 8.35938C9.41667 8.66146 9.59625 8.90625 9.85125 9.09375C10.1067 9.28125 10.3958 9.375 10.7188 9.375ZM4.28125 10.625C3.59375 10.625 2.99229 10.3983 2.47688 9.945C1.96104 9.49208 1.66146 8.92188 1.57813 8.23438L1.25 5.625H0.625V4.375H4.71875C5.17708 4.375 5.59625 4.48688 5.97625 4.71063C6.35667 4.93479 6.65625 5.23958 6.875 5.625H8.14062C8.35937 5.23958 8.65896 4.93479 9.03938 4.71063C9.41938 4.48688 9.83854 4.375 10.2969 4.375H14.375V5.625H13.75L13.4219 8.23438C13.3385 8.92188 13.0392 9.49208 12.5238 9.945C12.0079 10.3983 11.4062 10.625 10.7188 10.625C10.125 10.625 9.59125 10.4558 9.1175 10.1175C8.64333 9.77875 8.3125 9.32812 8.125 8.76562L7.89062 8.0625C7.86979 7.98958 7.84896 7.91396 7.82812 7.83562C7.80729 7.75771 7.78646 7.64583 7.76562 7.5H7.23438C7.21354 7.625 7.19271 7.72646 7.17188 7.80438C7.15104 7.88271 7.13021 7.95833 7.10938 8.03125L6.875 8.75C6.6875 9.3125 6.35687 9.76562 5.88313 10.1094C5.40896 10.4531 4.875 10.625 4.28125 10.625Z"
                                                fill="#1C1B1F" />
                                        </g>
                                    </svg>
                                </span>
                                <span>2,019 views</span>
                                <span>
                                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#1C1B1F" />
                                    </svg>
                                </span>
                                <span>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.50084 11.1249C6.41858 11.1254 6.33704 11.1097 6.26089 11.0786C6.18475 11.0475 6.11549 11.0016 6.05709 10.9437L1.20084 6.0812C0.591686 5.46569 0.25 4.63468 0.25 3.7687C0.25 2.90272 0.591686 2.07171 1.20084 1.4562C1.81475 0.844019 2.64636 0.500244 3.51334 0.500244C4.38032 0.500244 5.21192 0.844019 5.82584 1.4562L6.50084 2.1312L7.17584 1.4562C7.78975 0.844019 8.62136 0.500244 9.48834 0.500244C10.3553 0.500244 11.1869 0.844019 11.8008 1.4562C12.41 2.07171 12.7517 2.90272 12.7517 3.7687C12.7517 4.63468 12.41 5.46569 11.8008 6.0812L6.94459 10.9437C6.88619 11.0016 6.81693 11.0475 6.74078 11.0786C6.66463 11.1097 6.58309 11.1254 6.50084 11.1249Z"
                                            fill="#DE4404" />
                                    </svg>
                                </span>
                                <span>(1,452)</span>
                            </div>
                        </div>
                    </div>
                </div> */}
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