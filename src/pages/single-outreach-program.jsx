import AboutHero from "../components/about/hero"
import ProgramsGrid from "../components/outreachprograms/programs-grid";
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import background from '../hero/single-program.png'
import { useParams } from 'react-router-dom';
const SingleOutreachProgram = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar />
            <main>
            {id === 'community-engagement' && (
                <AboutHero title={'Community Engagement'} subtitle='Outreach Programs' background={background} />

            )}
            {id === 'KALM' && (
            <AboutHero title={'Kofi Annan Living Memorial (KALM)'} subtitle='Outreach Programs' background={background} />
            )}
            {id === 'kofi-annan-dialogues' && (
                 <AboutHero title={'Kofi Annan Dialogues – Wednesday Seminars'} subtitle='Outreach Programs' background={background} />
            )}
                <section className="single">
                    <div className="single-outreach-container container px-5 md:px-10">
                        {id === 'community-engagement' && (
                            <p>Dialogues, trainings and workshops with women and youth are a key part of the Kofi Annan Institute’s activities. We strongly believe that youth and women are crucial for Liberia’s reconstruction and development. To focus specifically on these two population groups is essential in a country where older men often take the front seat when it comes to public decision-making, thereby frequently underrepresenting the needs of women and future generations. The youth of today will be the leaders of tomorrow. Therefore, we need to make particular efforts to strengthen the skills of young people in the country. We do so through women’s community engagements and youth leadership trainings.  </p>
                        )}
                        {id === 'KALM' && (
                            <p>The Kofi Annan Living Memorial (KALM) is a pan-African initiative to commemorate and sustain the legacy of the late UN Secretary-General. Rather than erecting a monument, the memorial consists in education initiatives seeking to promote peace and the Sustainable Development Goals. KAICT participates in the initiative through a course for Kofi Annan Young Diplomats for Conflict Prevention and the realization of the Sustainable Development Goals (SDGs). This consists in a 46-hours certificate program. It targets an educated population segment, i.e. senior high school students, university students, professionals in the security sector, civil society, NGO, Government and private sector. </p>
                        )}
                        {id === 'kofi-annan-dialogues' && (
                            <>
                                <p>The Wednesday Seminar on Peace, Politics and Society takes place weekly during the lecture period. It is an extra-curricular information and discussion event for the student population and the interested public. It is flexible in format and can accommodate a broad range of topics on politics, economics and society. By regularly organizing the seminar, we aim to provide a space for informed and reasoned debate on issues and trends in Liberia and beyond. The event is open to diverse styles of knowledge transfer. Often, external experts or KAICT faculty present on current events or academic debates and discuss their insights with the audience. Panel discussions or student model debates are among the alternative formats. Screening and discussion of documentaries, movies or online lectures by third parties also take place within the seminar framework. The Wednesday Seminar takes place in the cozy atmosphere of the Graduate School’s grand lecture hall and attracts approximately 30 to 60 visitors from the student population and the public.</p>

                            </>


                        )}

                        {id === 'community-engagement' && (
                            
                            <div className="">
                                <div className="mb-4">
                                    <h1 className="py-2 font-bold">WOMEN COMMUNITY ENGAGEMENT</h1>
                                    <div>
                                        <p>Our Women’s Community Engagements focus on a broad range of topics, from elections to peaceful conflict resolution. While most attendees of our events are women, we include some men in our sessions, as we believe that gender norms can only be changed in collaboration and not in isolation. Effective gender-related interventions need to include both men and women.
                                            
                                        </p>
                                    </div>

                                </div>
                                <div className="">
                                    <h1 className="font-bold">YOUTH LEADERSHIP TRAINING PROGRAM </h1>
                                    <div>
                                        <p>
                                            KAICT offers a leadership program for motivated and talented young professionals to-be. The program is developed based on the conviction that there is a need for a new breed of young leaders dedicated to the promotion of participatory, enabling, transparent and integer leadership in all sectors of Liberia, oriented towards a more stable country.
                                            The young leadership program aims to fill the vacuum of young leaders in the age bracket of 18 to 35 years, who will foster democracy that engenders social justice, transparency, integrity, gender equity and responsibility and human social capital development in Liberia.

                                        </p>
                                    </div>
                                </div>

                            </div>
                        )}

                    </div>
                </section>

                <section className="outreach-card-sec">
                    <div className="outreach-card-container title container mx-auto px-5 md:px-10">
                        <h2 className="outreach-single-title text-center" >Outreach Programs</h2>
                    </div>
                    <ProgramsGrid />
                </section>
            </main>
            <Footer />

        </div>
    )
}
export default SingleOutreachProgram