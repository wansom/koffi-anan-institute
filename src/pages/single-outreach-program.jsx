import AboutHero from "../components/about/hero"
import Footer from "../components/utils/footer"
import Navbar from "../components/utils/navbar"
import  background from '../hero/single-program.png'
import { useParams } from 'react-router-dom';
const SingleOutreachProgram=()=>{
    const { id } = useParams();
    return (
        <div>
            <Navbar/>
            <main>
                <AboutHero title={id} subtitle='Outreach Programs' background={background}/>
                <section className="single">
            <div className="single-outreach-container container">
                <p>The Kofi Annan Institute for Conflict Transformation at the University of Liberia is committed to
                    engaging with the community to promote peace and reconciliation. Through its outreach programs, the
                    institute works with local communities to develop sustainable solutions to conflict and build
                    lasting peace. </p>
                <p>The community engagement program offers a range of services and activities designed to foster
                    dialogue and understanding among individuals and groups with diverse perspectives and experiences.
                    These include workshops, seminars, and training sessions on conflict resolution, peacebuilding, and
                    related topics.</p>
                {/* <div className="single-outreach-cards">
                    <div className="singe-out-card">
                        <span>60+</span>
                        <br/>
                        <span>Seminars per year</span>
                    </div>
                    <div className="singe-out-card">
                        <span>711</span>
                        <br/>
                        <span>Desks donated to schools</span>
                    </div>
                    <div className="singe-out-card">
                        <span>25+</span>
                        <br/>
                        <span>Workshops per year</span>
                    </div>
                </div> */}
                <p>The program also partners with local organizations and community leaders to address specific
                    challenges related to conflict and violence in the community. This includes working with youth
                    groups, women's organizations, and other community-based organizations to promote greater
                    participation and inclusion in peacebuilding initiatives.</p>
                <p>Through its community engagement program, the Kofi Annan Institute for Conflict Transformation
                    University of Liberia seeks to empower individuals and communities to take an active role in
                    building peace and promoting reconciliation. By working together with local partners and
                    stakeholders, the institute hopes to create a more peaceful and inclusive society in Liberia and
                    beyond.</p>
                {/* <div className="single-gallery-slider">
                    <div className="top-gallery">
                        <div className="left-arrow">
                            <button>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_732_249" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0"
                                        width="25" height="25">
                                        <rect width="25" height="25" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_732_249)">
                                        <path
                                            d="M10.4167 22.9166L0 12.4999L10.4167 2.08325L12.2656 3.93221L3.69792 12.4999L12.2656 21.0676L10.4167 22.9166Z"
                                            fill="#333333" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className="slides">
                            <div className="single-out-slide">
                                <img src="/images/outreach-program/p-3.png" alt="Children In className"/>
                            </div>
                            <div className="single-out-slide">
                                <img src="/images/outreach-program/p-3.png" alt="Children In className"/>
                            </div>
                            <div className="single-out-slide">
                                <img src="/images/outreach-program/p-3.png" alt="Children In className"/>
                            </div>
                        </div>
                        <div className="right-arrow">
                            <button>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_732_246" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0"
                                        width="25" height="25">
                                        <rect width="25" height="25" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_732_246)">
                                        <path
                                            d="M8.35677 22.9168L6.50781 21.0679L15.0755 12.5002L6.50781 3.93245L8.35677 2.0835L18.7734 12.5002L8.35677 22.9168Z"
                                            fill="#333333" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bottom-gallery">
                        <div className="dots">
                            <div className="dot active"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
        {/* <section className="banner single-support about">
            <div className="banner-mask support">
                <div className="single-support-container container">
                    <div className="support-form">
                        <form  className="support" action="">
                            <h3 className="support-title ">Support the program</h3>
                            <div className="control-group">
                                <label for="how">Amount</label><br/>
                                <input type="text" name="how" placeholder="USD 5.00"/>
                            </div>
                            <div className="control-group checkbox">
                                <label className="container-check">
                                    <input type="checkbox"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label for="">By clicking on “Send Message” you agree to our Terms & Conditions and Privacy
                                    Statement.</label>
                            </div>
                            <div className="control-group">
                                <button type="submit">Attend Event</button>
                            </div>
                        </form>
                    </div>
                    <div className="empty"></div>
                </div>
            </div>
        </section> */}
        <section className="outreach-card-sec">
            <div className="outreach-card-container title container">
                <h2 className="outreach-single-title text-center" >Outreach Programs</h2>
            </div>
            <div className="outreach-card-container container">
            <div className="outreach-card">
              <img src="/images/outreach-program/p-8.jpeg" alt="" />
              <div className="outreach-info">
                <h2>Community Engagement</h2>
                <p className="h-[210px] overflow-y-scroll">
                  Dialogues, trainings and workshops with women and youth are a
                  key part of the Kofi Annan Institute’s activities. We strongly
                  believe that youth and women are crucial for Liberia’s
                  reconstruction and development. To focus specifically on these
                  two population groups is essential in a country where older
                  men often take the front seat when it comes to public
                  decision-making, thereby frequently underrepresenting the
                  needs of women and future generations. The youth of today will
                  be the leaders of tomorrow. Therefore, we need to make
                  particular efforts to strengthen the skills of young people in
                  the country. We do so through women’s community engagements
                  and youth leadership trainings.{" "}
                </p>
                <a href="outreachprogram/Community Engagement">
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
            <div className="outreach-card">
              <img src="/images/outreach-program/p-1.jpg" alt="" />
              <div className="outreach-info">
                <h2>Women Community Engagement</h2>
                <p className="h-[210px] overflow-y-scroll">
                  Our Women’s Community Engagements focus on a broad range of
                  topics, from elections to peaceful conflict resolution. While
                  most attendees of our events are women, we include some men in
                  our sessions, as we believe that gender norms can only be
                  changed in collaboration and not in isolation. Effective
                  gender-related interventions need to include both men and
                  women.
                </p>
                <a href="outreachprogram/>Women Community Engagement">
                  {" "}
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
            <div className="outreach-card">
              <img src="/images/outreach-program/p-6.jpeg" alt="" />
              <div className="outreach-info">
                <h2>KOFI ANNAN LIVING MEMORIAL (KALM)</h2>
                <p className="h-[210px] overflow-y-scroll">
                  The Kofi Annan Living Memorial (KALM) is a pan-African
                  initiative to commemorate and sustain the legacy of the late
                  UN Secretary-General. Rather than erecting a monument, the
                  memorial consists in education initiatives seeking to promote
                  peace and the Sustainable Development Goals. KAICT
                  participates in the initiative through a course for Kofi Annan
                  Young Diplomats for Conflict Prevention and the realization of
                  the Sustainable Development Goals (SDGs). This consists in a
                  46-hours certificate program. It targets an educated
                  population segment, i.e. senior high school students,
                  university students, professionals in the security sector,
                  civil society, NGO, Government and private sector.
                </p>
                <a href="outreachprogram/KOFI ANNAN LIVING MEMORIAL (KALM)">
                  <button>Explore Program</button>
                </a>
              </div>
            </div>
            </div>
        </section>
            </main>
            <Footer/>

        </div>
    )
}
export default SingleOutreachProgram